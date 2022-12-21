const treeLifeStatus = Number(process.argv[2])

if (treeLifeStatus == 0) {
    console.log('alive');
  } else if (treeLifeStatus == 1) {
    console.log('flowering');
  } else if (treeLifeStatus == 2) {
    console.log('shedding');
  } else {
    console.log('other');
  }

