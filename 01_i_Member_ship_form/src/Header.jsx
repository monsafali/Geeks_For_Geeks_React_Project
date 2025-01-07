function Header() {
  return (
    <div className="flex justify-evenly">
      <div>
        <img src="images/logo2.jpg" className="w-60 h-40 -rotate-12" alt="" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-3xl">ُپاکستان مرکزی مسلم لیگ</h1>
        <p className="border border-black  text-center p-2 text-2xl rounded-md mt-4 mb-3">
          ترقی خوشحالی اورامن و استھکام
        </p>
        <p className="font-extrabold  text-3xl">ممبر شپ فارم</p>
      </div>
      <div>
        <img src="images/logo.jpg" className="w-60 h-40 rounded-full " alt="" />
        <p className="w-40 text-end">ہمارا عزم عالیشان اسلامی فلاحی پاکستان</p>
      </div>
    </div>
  );
}

export default Header;
