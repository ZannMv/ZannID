const { spawn } = require("child_process");

// Menjalankan `astro preview`
const server = spawn("npm", ["run", "preview"], {
  stdio: "inherit",
  shell: true
});

server.on("close", (code) => {
  console.log(`Astro preview exited with code ${code}`);
  process.exit(code);
});