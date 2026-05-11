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

    console.log("=== 1. Server git log (latest 5 commits) ===");
    const log = await ssh.execCommand('git log -5 --oneline', { cwd: '/home/apps/ssquad_global' });
    console.log(log.stdout);

    console.log("\n=== 2. SOC 2 Type 2 image exists? ===");
    const img = await ssh.execCommand('ls -la "/home/apps/ssquad_global/public/certificate/soc 2 type 2.jpeg"');
    console.log(img.stdout || img.stderr);

    console.log("\n=== 3. Kuwait in contact page source? ===");
    const kw = await ssh.execCommand('grep -c "Kuwait" /home/apps/ssquad_global/app/contact/page.tsx');
    console.log("Kuwait found:", kw.stdout, "times");

    console.log("\n=== 4. IAM highlight removed? ===");
    const iam = await ssh.execCommand('grep "highlight" /home/apps/ssquad_global/app/services/iam/page.tsx');
    console.log(iam.stdout || "No highlight found (good!)");

    console.log("\n=== 5. LinkedIn URLs updated? ===");
    const li = await ssh.execCommand('grep "linkedin.com" /home/apps/ssquad_global/app/data/management.ts | head -5');
    console.log(li.stdout);

    console.log("\n=== 6. Malaysia address correct? ===");
    const my = await ssh.execCommand('grep "Malaysia" /home/apps/ssquad_global/app/contact/page.tsx');
    console.log(my.stdout.trim());

    console.log("\n=== 7. PM2 status ===");
    const pm2 = await ssh.execCommand('pm2 list');
    console.log(pm2.stdout);

    console.log("\n=== 8. SOC2 cert in built page? ===");
    const soc = await ssh.execCommand('curl -s http://localhost:3000 | grep -o "soc 2 type 2"');
    console.log("SOC2 in homepage:", soc.stdout || "NOT FOUND");

    console.log("\n=== 9. Kuwait in live contact? ===");
    const kwLive = await ssh.execCommand('curl -s http://localhost:3000/contact | grep -o "Kuwait"');
    console.log("Kuwait in live contact:", kwLive.stdout || "NOT FOUND");

  } catch (err) {
    console.error('Error:', err);
  } finally {
    ssh.dispose();
  }
}

runCheck();
