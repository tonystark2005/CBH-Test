const { deterministicPartitionKey } = require("./dpk");
const str = `asgfsdufsgfvbsdufgsikfhsdkchbsdkfyhsdokfhdskkfysdhfsdkhfsdkhfsdkfhsdkfhsdkfryhsdkfhsdiufysdfbhdskjfcsdbkfgsdkufgskfbvsdkfgbsdkfdskfhsdkfgsdkfgsdbkbfsdkgfhsdkfhbsd
kfhbsdkfsdkfhsdkfhdskfh hugdfkghfkdgfsddkfgsdkfsdkfsdkfsdghkfsdkfskfgsdkf ywyhweyroewrydhweoyedheoe  roewrweo ryeworwerweyroe oworweyo woryweoryew rweoryoewr yehworyweor 
reruwit ieer we rweyr weo rywer we rowe yrwoer weo rwe8 rweyorew;rewtr rwesor fesdo tsdiu rtwe rtea8u8tgairteg riwe  tr8ewirtrewtrr ewiwetrtewrwetr weweitreiwrt ewtriuew5trwerfrwe we7re 7ew8
weertwe7rwi7rwirriwrtwtrwietriwtririwri`;
// console.log(str.length)
console.log(deterministicPartitionKey(12));