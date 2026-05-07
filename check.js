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

    console.log("Curling localhost:3000 to see if it's updated now...");
    const res = await ssh.execCommand('curl -s http://localhost:3000/contact | grep -o "28-7, Level 28-03"');
    console.log("NEW ADDRESS FOUND:", res.stdout || "No");

    const res2 = await ssh.execCommand('curl -s http://localhost:3000/contact | grep -o "25-7, Level 25-03"');
    console.log("OLD ADDRESS:", res2.stdout || "No");

  } catch (err) {
    console.error('Error:', err);
  } finally {
    ssh.dispose();
  }
}

runCheck();
