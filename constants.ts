
import type { Stage } from './types';
import { PlanIcon, DesignIcon, DevelopIcon, TestIcon, LaunchIcon } from './components/icons';

export const STAGES: Stage[] = [
  {
    id: 1,
    title: "المرحلة الأولى: التخطيط والفكرة",
    icon: PlanIcon,
    subSteps: [
      { id: '1-1', title: "تحديد الفكرة الأساسية", description: "ماذا سيعلّم تطبيقك؟ كلما كنت أكثر تحديداً، كان أفضل. مثال: تطبيق لتعلم مفردات اللغة الإنجليزية للأعمال.", prompt: "Provide actionable advice for brainstorming and narrowing down a core idea for a new educational mobile application. Suggest techniques for identifying a niche." },
      { id: '1-2', title: "تحديد الجمهور المستهدف", description: "لمن هذا التطبيق؟ أطفال، طلاب، محترفون؟ تصميم التطبيق يعتمد كلياً على الجمهور.", prompt: "Explain the process of defining and analyzing a target audience for an educational app. What demographic, psychographic, and behavioral factors should be considered?" },
      { id: '1-3', title: "تحليل المنافسين", description: "ابحث عن تطبيقات مشابهة. ما الذي يميز تطبيقك عنهم؟ هذه هي ميزتك التنافسية.", prompt: "Describe a step-by-step process for conducting a competitive analysis for a new app. What tools can be used and what key aspects should be evaluated in competing apps?" },
      { id: '1-4', title: "تحديد الميزات الأساسية (MVP)", description: "ابدأ بأهم الميزات فقط. مثل: تسجيل الدخول، قائمة الدروس، محتوى الدرس، اختبارات قصيرة.", prompt: "Define the concept of a Minimum Viable Product (MVP) in app development. Provide a prioritized list of essential features for an educational app's MVP." },
      { id: '1-5', title: "تحديد نموذج الربح", description: "كيف ستجني المال؟ إعلانات، اشتراكات، شراء لمرة واحدة، أو نموذج Freemium.", prompt: "Compare and contrast different monetization models for mobile apps (Subscriptions, Ads, Freemium, One-time purchase). Which models are most suitable for an educational app and why?" },
    ]
  },
  {
    id: 2,
    title: "المرحلة الثانية: التصميم (UX/UI)",
    icon: DesignIcon,
    subSteps: [
      { id: '2-1', title: "تصميم تجربة المستخدم (UX)", description: "هيكل التطبيق وتدفق التنقل بين الشاشات. يجب أن يكون منطقياً وسهلاً. ارسم مخططات هيكلية (Wireframes).", prompt: "Explain the importance of User Experience (UX) design. Outline the key steps in designing the UX for an app, from user flows to wireframing. Recommend some popular UX design tools." },
      { id: '2-2', title: "تصميم واجهة المستخدم (UI)", description: "الشكل الجمالي للتطبيق: الألوان، الخطوط، الأيقونات. يجب أن يكون جذاباً ومناسباً لجمهورك.", prompt: "Describe best practices for User Interface (UI) design for a modern mobile app. Discuss color theory, typography, and iconography. How can UI design be tailored for an educational app's target audience (e.g., kids vs. professionals)?" },
    ]
  },
  {
    id: 3,
    title: "المرحلة الثالثة: التطوير (البرمجة)",
    icon: DevelopIcon,
    subSteps: [
      { id: '3-1', title: "منصات بدون كود (No-Code)", description: "خيار ممتاز إذا لم تكن لديك خبرة برمجية. منصات مثل Adalo أو Bubble.", prompt: "What are the pros and cons of using No-Code/Low-Code platforms like Adalo or Bubble for building an app? For what kind of projects are they most suitable?" },
      { id: '3-2', title: "توظيف فريق أو مطور مستقل", description: "إذا كانت لديك ميزانية، يمكنك توظيف خبراء لتنفيذ رؤيتك عبر منصات مثل Upwork.", prompt: "Provide tips for successfully hiring and managing freelance developers or a development agency. What should be included in a project brief to ensure clear communication?" },
      { id: '3-3', title: "الواجهة الأمامية (Frontend)", description: "ما يراه المستخدم. تقنيات مثل React Native أو Flutter تتيح بناء التطبيق لأندرويد و iOS معاً.", prompt: "Compare React Native and Flutter for cross-platform app development. What are the key advantages and disadvantages of each framework?" },
      { id: '3-4', title: "الواجهة الخلفية (Backend)", description: "عقل التطبيق الذي يخزن البيانات. Firebase من جوجل خيار ممتاز للمبتدئين.", prompt: "Explain the role of a backend in a mobile app. Why is a Backend-as-a-Service (BaaS) like Firebase a good choice for beginners? What are its core services?" },
    ]
  },
  {
    id: 4,
    title: "المرحلة الرابعة: الاختبار والإطلاق",
    icon: TestIcon,
    subSteps: [
      { id: '4-1', title: "الاختبار (Testing)", description: "اختبر التطبيق بدقة للعثور على الأخطاء (Bugs). اطلب من الأصدقاء والعائلة تجربته.", prompt: "Describe different types of software testing that are crucial before launching an app (e.g., unit testing, integration testing, user acceptance testing). How can one effectively gather feedback during the testing phase?" },
      { id: '4-2', title: "الإطلاق (Launch)", description: "ستحتاج إلى حساب مطور على Google Play (رسوم مرة واحدة) و Apple App Store (رسوم سنوية).", prompt: "Provide a checklist for launching a mobile app on the Apple App Store and Google Play Store. What are the common requirements and potential reasons for rejection?" },
    ]
  },
  {
    id: 5,
    title: "المرحلة الخامسة: ما بعد الإطلاق",
    icon: LaunchIcon,
    subSteps: [
      { id: '5-1', title: "جمع آراء المستخدمين", description: "اقرأ التعليقات والمراجعات على المتاجر. إنها كنز من المعلومات.", prompt: "What are the most effective methods for collecting and analyzing user feedback after an app has been launched?" },
      { id: '5-2', title: "تحليل البيانات", description: "استخدم أدوات تحليل لمعرفة كيف يستخدم الناس تطبيقك وأي الميزات هي الأكثر شعبية.", prompt: "Explain the role of analytics in app management. What are some key metrics (KPIs) to track for an educational app to measure its success and user engagement?" },
      { id: '5-3', title: "التحديثات المستمرة", description: "بناءً على الملاحظات والبيانات، قم بإصلاح الأخطاء وإضافة ميزات جديدة بشكل دوري.", prompt: "Why is it important to regularly update a mobile app? Suggest a strategy for planning and releasing app updates to keep users engaged and attract new ones." },
    ]
  }
];
