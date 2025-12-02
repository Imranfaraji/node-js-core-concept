const fs= require('fs')

const path=require('path')

const sourceDir=path.join(__dirname,"output","messi-file")

const organizer=path.join(__dirname, "output", "organized")


const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectory(){
    if(!fs.existsSync(sourceDir)){
        fs.mkdirSync(sourceDir,{recursive:true})

        testFiles.forEach(file=>{
            fs.writeFileSync(path.join(sourceDir,file),`content of ${file}`)
        })
    }


    console.log("messi directory file");

    if(!fs.existsSync(organizer)){
        fs.mkdirSync(organizer,{recursive:true})
    }

    Object.keys(categories).forEach(catagory=>{
      const catagoryPath=path.join(organizer,catagory)

      if(!fs.existsSync(catagoryPath)){
        fs.mkdirSync(catagoryPath)
      }
    })
}



function getCategory(filename) {
  const ext = path.extname(filename).toLowerCase(); // ".pdf", ".jpg"
  // [images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"]],
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }
  return "others";
}


function organizeFiles() {
  console.log("file organizer \n");
  console.log("source: ", sourceDir);
  console.log("Destination: ", organizer);
  console.log("\n" + "-".repeat(50) + "\n");

  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log("No files to work on!!");
    return;
  }
  console.log(`found ${files.length} files to organize \n`);

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    const category = getCategory(file);
    const destDir = path.join(organizer, category);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);

    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
}



function showHelp() {
  console.log(`
        file organizer - usage:

        commands: 
        init - create files
        organize - organize files into categories

        example:
        node file-organizer init
        node file-organizer organize
        `);
}

const command = process.argv[2];

switch (command) {
  case "init":
    initializeDirectory();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    showHelp();
    break;
}

