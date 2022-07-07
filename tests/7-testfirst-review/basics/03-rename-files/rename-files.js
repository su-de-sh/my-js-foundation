/* eslint-disable no-unused-vars */
function renameFiles(fileNames) {
  let myHash = {};
  let n = 1;
  let updatedFileNames = [];

  fileNames.forEach((file) => {
    if (myHash[file]) {
      myHash[file]++;

      let filename = `${file}(${n})`;
      while (updatedFileNames.includes(filename)) {
        n++;
        filename = `${file}(${n})`;
      }
      updatedFileNames.push(filename);
    } else {
      myHash[file] = 1;
      updatedFileNames.push(file);
    }
  });
  return updatedFileNames;
}
