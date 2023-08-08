import React from 'react';
import Service from './Service';
function Home() {
  return (
    <>
      {/* forked from: https://codepen.io/cuonoj/pen/JjPmMaB */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src="https://cfvod.kaltura.com/pd/p/1825021/sp/182502100/serveFlavor/entryId/1_mjf14a1e/v/1/flavorId/1_jtaulkv8/name/a.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="video-content space-y-2 z-10 namenav">
          <h1 className="font-light text-6xl">نسعى دوما للابتكار والريادة</h1>
          <h3 className="font-light text-3xl">لبناء عالم افضل</h3>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    .video-docker video {\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n\n    .video-docker::after {\n        content: "";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background: rgba(0, 0, 0, 0.6);\n        z-index: 1;\n    }\n',
        }}
      />
<section className="bg-gray-100">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
         ضغط الدم
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
        ارتفاع ضغط الدم حالة شائعة تؤثر على شرايين الجسم، ويُطلَق عليها أيضًا فرط ضغط الدم. في حال الإصابة بارتفاع ضغط الدم، تكون قوة دفع الدم باتجاه جدران الشرايين عالية للغاية باستمرار. ويجعل هذا القلب يعمل بجهد أكبر لضخ الدم.

يُقاس ضغط الدم بوحدة الملليمتر الزئبقي (ملم زئبقي). تُوصَف الحالة عمومًا بأنها ارتفاع في ضغط الدم عندما تكون قراءة ضغط الدم 80/130 ملم زئبقي أو أعلى.
تقسم الكلية الأمريكية لأمراض القلب وجمعية القلب الأمريكية ضغط الدم إلى أربع فئات عامة. ويصنّف ضغط الدم المثالي بأنه ضغط الدم الطبيعي.
        </p>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About Us Image"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>
<Service/>
    </>
  );
}

export default Home;
