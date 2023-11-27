const DATA = [
  { name: "철수", age: 10, school: "다람쥐초등학교" },
  { name: "짱구", age: 10, school: "다람쥐초등학교" },
  { name: "유리", age: 10, school: "토끼초등학교" },
  { name: "구슬", age: 10, school: "토끼초등학교" },
];

export default function BonusQuiz() {
  let a = DATA.filter((dd) => dd.school === "다람쥐초등학교");
  let b = DATA.filter((dd) => dd.school === "토끼초등학교");

  let aa = a.map((data) => ({
    name: data.name + "어린이",
  }));
  //   classmate.map((item)=>({name : item.name + "어린이", school : "떡잎유치원"}))
  let bb = b.map((data) => ({
    name: data.name,
    age: data.age,
    school: data.school,
    candy: data.candy ? data.candy + 10 : 10,
  }));

  console.log(aa);
  console.log(bb);
  return <div>1</div>;
}
