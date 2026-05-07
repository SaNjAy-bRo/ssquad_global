const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function runDeploy() {
  try {
    await ssh.connect({
      host: '103.185.75.166',
      port: 2222,
      username: 'root',
      password: 'Hj8743VN@Jb&%$3@!'
    });

    console.log("Copying updated page.tsx to public_html...");
    await ssh.execCommand('cp /home/apps/ssquad_global/app/contact/page.tsx /home/ssquad/public_html/app/contact/page.tsx');

    console.log("Running npm run build in public_html...");
    const buildRes = await ssh.execCommand('npm run build', { cwd: '/home/ssquad/public_html' });
    console.log(buildRes.stdout);
    if(buildRes.stderr) console.error(buildRes.stderr);

    console.log("Restarting passenger app in public_html...");
    await ssh.execCommand('mkdir -p tmp && touch tmp/restart.txt', { cwd: '/home/ssquad/public_html' });

    console.log("Done!");

  } catch (err) {
    console.error('Error:', err);
  } finally {
    ssh.dispose();
  }
}

runDeploy();
