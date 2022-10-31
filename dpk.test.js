const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given undefined input", () => {
    const trivialKey = deterministicPartitionKey(undefined);
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given null input", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal 'f235c129089233ce3c9c85f1d1554b9cb21952b27e0765bcbcf75d550dd4d2874e546889da5c44db9c066e05e268f4742d672889ff62fb9cb18a3d1b57f00658' when given 12 (number) input", () => {
    const trivialKey = deterministicPartitionKey(12);
    expect(trivialKey).toBe("f235c129089233ce3c9c85f1d1554b9cb21952b27e0765bcbcf75d550dd4d2874e546889da5c44db9c066e05e268f4742d672889ff62fb9cb18a3d1b57f00658");
  });


  it("Returns the literal '47070e8f45799540c361c6d92c2df5b2a54f25ff2a19bc8d2da1ef70ddcff117137baf4e206e56528e9eca14aea6a3ea24e4dfa942447d4a92dce09078f93128' when given 'abc' (string) input", () => {
    const trivialKey = deterministicPartitionKey('abc');
    expect(trivialKey).toBe("47070e8f45799540c361c6d92c2df5b2a54f25ff2a19bc8d2da1ef70ddcff117137baf4e206e56528e9eca14aea6a3ea24e4dfa942447d4a92dce09078f93128");
  });

  it("Returns the literal '47070e8f45799540c361c6d92c2df5b2a54f25ff2a19bc8d2da1ef70ddcff117137baf4e206e56528e9eca14aea6a3ea24e4dfa942447d4a92dce09078f93128' when given 'abc' (string) input", () => {
    const trivialKey = deterministicPartitionKey('abc');
    expect(trivialKey).toBe("47070e8f45799540c361c6d92c2df5b2a54f25ff2a19bc8d2da1ef70ddcff117137baf4e206e56528e9eca14aea6a3ea24e4dfa942447d4a92dce09078f93128");
  });

  it("Returns the literal 'c485524d2c5297d937ebbd8b5a391e2a6b5e2977778e3513fff31565aaa0fa47ab8eb21b84535de7f214ec6fc1cefa5852e97593854ceb411d1c1669949465ed' when given array input", () => {
    const trivialKey = deterministicPartitionKey(['San', 'Tan', 'Ban']);
    expect(trivialKey).toBe("c485524d2c5297d937ebbd8b5a391e2a6b5e2977778e3513fff31565aaa0fa47ab8eb21b84535de7f214ec6fc1cefa5852e97593854ceb411d1c1669949465ed");
  });


  it("Returns the literal 'a3feebe6d236e6a79d504efa7789115573ff679a7aad5d9be0c2a7aa7536b0385acdbc5bcb9bdfa0a67f5a1c9f9d82f0012fadba91d62cb2fc0d0d955ee1356e' when given object input", () => {
    const trivialKey = deterministicPartitionKey({ 'abc': 12, 23: 56 });
    expect(trivialKey).toBe("a3feebe6d236e6a79d504efa7789115573ff679a7aad5d9be0c2a7aa7536b0385acdbc5bcb9bdfa0a67f5a1c9f9d82f0012fadba91d62cb2fc0d0d955ee1356e");
  });

  it("Returns the literal 'a8e3784f27ef4bb58401a0e8e74644a268dcbb45848730995ce1fd437fd171c823d62bce1b824389cf6375710c56a02a500d26dfe0f3a74afd6bde88f55034ec' when given string with length greater than 256 input", () => {
    const trivialKey = deterministicPartitionKey(`asgfsdufsgfvbsdufgsikfhsdkchbsdkfyhsdokfhdskkfysdhfsdkhfsdkhfsdkfhsdkfhsdkfryhsdkfhsdiufysdfbhdskjfcsdbkfgsdkufgskfbvsdkfgbsdkfdskfhsdkfgsdkfgsdbkbfsdkgfhsdkfhbsd
kfhbsdkfsdkfhsdkfhdskfh hugdfkghfkdgfsddkfgsdkfsdkfsdkfsdghkfsdkfskfgsdkf ywyhweyroewrydhweoyedheoe  roewrweo ryeworwerweyroe oworweyo woryweoryew rweoryoewr yehworyweor 
reruwit ieer we rweyr weo rywer we rowe yrwoer weo rwe8 rweyorew;rewtr rwesor fesdo tsdiu rtwe rtea8u8tgairteg riwe  tr8ewirtrewtrr ewiwetrtewrwetr weweitreiwrt ewtriuew5trwerfrwe we7re 7ew8
weertwe7rwi7rwirriwrtwtrwietriwtririwri`);
    expect(trivialKey).toBe("a8e3784f27ef4bb58401a0e8e74644a268dcbb45848730995ce1fd437fd171c823d62bce1b824389cf6375710c56a02a500d26dfe0f3a74afd6bde88f55034ec");
  });

});
