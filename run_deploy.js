const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function deploy() {
  try {
    await ssh.connect({
      host: '103.185.75.166',
      port: 2222,
      username: 'root',
      password: 'Hj8743VN@Jb&%$3@!'
    });

    const cwd = '/home/apps/ssquad_global';

    console.log("Fetching latest changes...");
    const fetch = await ssh.execCommand('git fetch origin main', { cwd });
    console.log(fetch.stdout, fetch.stderr);

    console.log("Resetting to origin/main...");
    const reset = await ssh.execCommand('git reset --hard origin/main', { cwd });
    console.log(reset.stdout, reset.stderr);

    console.log("Clearing Next.js cache...");
    await ssh.execCommand('rm -rf .next', { cwd });

    console.log("Building Next.js application...");
    const build = await ssh.execCommand('npm run build', { cwd });
    console.log(build.stdout);
    if(build.stderr) console.error(build.stderr);

    console.log("Stopping PM2 services...");
    await ssh.execCommand('pm2 stop all', { cwd });

    console.log("Starting PM2 services...");
    await ssh.execCommand('pm2 start all', { cwd });

    console.log("Deployment completed successfully.");

  } catch (err) {
    console.error('Deployment Error:', err);
  } finally {
    ssh.dispose();
  }
}

deploy();
