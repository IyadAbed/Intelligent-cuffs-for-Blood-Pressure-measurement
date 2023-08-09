import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <h2 className="xl:w-8/12 lg:w-10/12 w-full mt-10 font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          مؤسسة رغد الرواشدة للريادة والابتكار كف ضغط الدم
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
        
شركة ناشئة متخصصة في تطوير الأجهزة الطبية. تقع في إربد وتعتزم تصميم وبراءات الاختراع وتسويق الأجهزة والأدوات الطبية المتعلقة بمراقبة فرط ضغط الدم وتشخيصه وعلاجه وإدارته.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full"
          src="https://i.ibb.co/GvwJnvn/Group-736.png"
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full"
          src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
          alt="Group of people Chilling"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            مهمتنا
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
          يشجع تطوير منتجات جديدة على أساس الأفكار المبتكرة على تطوير شركات ناشئة جديدة تتفق مع الهدف العام لـ Call. تتفق حماية الملكية الفكرية للمنتجات المبتكرة أيضًا مع الهدف العام لهذه الدعوة. سيساهم تحديد موقع الشركة الناشئة في إربد في تحقيق اللامركزية في النشاط الاقتصادي في الأردن.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
          وهذا يعني أن تطوير منتجات جديدة سيقلل من اختلال التوازن التجاري الهيكلي في الأردن من خلال تعزيز الاستعداد للتصدير وزيادة القدرة التنافسية التي تتوافق بشكل وثيق مع أولويات البرنامج. علاوة على ذلك ، فإن الإجراء المقترح سيخلق وظائف جديدة خاصة لمهندسي التصميم والبائعين وأخيراً مطوري البرمجيات.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/2kxWpNm/Group-740.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/9g2R7Xr/Group-803.png"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
