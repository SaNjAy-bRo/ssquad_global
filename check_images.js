const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function runCheck() {
  try {
    await ssh.connect({
      host: '103.185.75.166',
      port: 2222,
      username: 'root',
      password: 'Hj8743VN@Jb&%$3@!'
    });

    console.log("=== Listing files in /public/certificate/ on server ===");
    const ls = await ssh.execCommand('ls -la /home/apps/ssquad_global/public/certificate/');
    console.log(ls.stdout);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    ssh.dispose();
  }
}

runCheck();
