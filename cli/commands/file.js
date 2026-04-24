const api = require("../services/api");
const fs = require("fs");
const FormData = require("form-data");
const ora = require("ora");
const chalk = require("chalk");
const Table = require("cli-table3");

module.exports = (program) => {
    program
        .command("upload <filepath>")
        .description("Upload File")
        .action(async (filepath) => {
            const spinner = ora("Uploading...").start();

            try {
                const form = new FormData();
                form.append("file", fs.createReadStream(filepath));

                await api.post("/files/upload", form, {
                    headers: form.getHeaders(),
                });
                spinner.succeed(chalk.green("File Uploaded"));
            } catch (err) {
                spinner.fail(chalk.red(err.response?.data?.message || err.message || "Upload Failed "));
            }
        });

    const table = new Table({
        head: ["ID", "Name", "Size(kb)", "Created"]
    });
    program
        .command("list")
        .description("List Files")
        .action(async () => {

            try {
                const res = await api.get("/files");
                if (res.data.data.length === 0) {
                    console.log(chalk.yellow("No files found"));
                    return;
                }
                // console.log(chalk.blue("Your Files: "));
                res.data.data.forEach((f) => {
                    table.push([
                        f.id,
                        f.filename,
                        (f.size / 1024).toFixed(2),
                        new Date(f.createdAt).toLocaleString(),
                    ]);
                });
                console.log(table.toString());

            } catch (err) {
                console.log(chalk.red(err.response?.data?.message || err.message));
            }
        });

    program
        .command("download <id>")
        .description("Download file")
        .action(async (id) => {
            const spinner = ora("Downloading...").start();

            try {
                const res = await api.get(`/files/${id}/download`, {
                    responseType: "stream",
                });

                const file = fs.createWriteStream(`download-${id}`);
                res.data.pipe(file);

                spinner.succeed(chalk.green("Downloaded"));
            } catch (err) {
                spinner.fail(chalk.red("Download failed"));
            }
        });

    program
        .command("delete <id>")
        .description("Delete File")
        .action(async (id) => {
            try {
                await api.delete(`/files/${id}`);
                console.log(chalk.green("File Deleted"));
            } catch {
                console.log(chalk.red("Delete Failed"));
            }
        })
}