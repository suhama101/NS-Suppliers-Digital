import { copyFile, glob } from "node:fs/promises";

// Next.js 16.4.6 can export nested prefetch files on Windows because it
// flattens forward slashes only. The client always requests flat filenames.
if (process.platform === "win32") {
  for await (const file of glob("out/**/__next.*/**/*.txt")) {
    const parts = file.split(/[\\/]/);
    const segmentIndex = parts.findIndex((part) => part.startsWith("__next."));
    const directory = parts.slice(0, segmentIndex).join("/");
    const filename = parts.slice(segmentIndex).join(".");
    await copyFile(file, `${directory}/${filename}`);
  }
}
