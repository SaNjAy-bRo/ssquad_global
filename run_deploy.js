const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function deploy() {
  try {
    await ssh.connect({
      host: '103.185.74.166',
      port: 8395,
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

    console.log("Running npm install...");
    const install = await ssh.execCommand('npm install', { cwd });
    console.log(install.stdout, install.stderr);

    console.log("Clearing Next.js cache...");
    await ssh.execCommand('rm -rf .next', { cwd });

    console.log("Building Next.js application...");
    const build = await ssh.execCommand('npm run build', { cwd });
    console.log(build.stdout);
    if(build.stderr) console.error(build.stderr);

    console.log("Stopping PM2 service ssquad_global...");
    const pm2Stop = await ssh.execCommand('pm2 stop ssquad_global', { cwd });
    console.log(pm2Stop.stdout, pm2Stop.stderr);

    console.log("Deleting PM2 service ssquad_global...");
    const pm2Delete = await ssh.execCommand('pm2 delete ssquad_global', { cwd });
    console.log(pm2Delete.stdout, pm2Delete.stderr);

    console.log("Starting PM2 service ssquad_global...");
    const pm2Start = await ssh.execCommand('PORT=8001 pm2 start npm --name "ssquad_global" -- start', { cwd });
    console.log(pm2Start.stdout, pm2Start.stderr);

    console.log("Restarting PM2 service ssquad_global...");
    const pm2Restart = await ssh.execCommand('pm2 restart ssquad_global', { cwd });
    console.log(pm2Restart.stdout, pm2Restart.stderr);

    console.log("Saving PM2 process list...");
    const pm2Save = await ssh.execCommand('pm2 save', { cwd });
    console.log(pm2Save.stdout, pm2Save.stderr);

    console.log("Deployment completed successfully.");

  } catch (err) {
    console.error('Deployment Error:', err);
  } finally {
    ssh.dispose();
  }
}

deploy();

