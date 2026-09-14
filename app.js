/* ==================================================
   DIGITAL BOOK READER
   کتابچه جامع قالب‌های محتوا
================================================== */


/* ==================================================
   BOOK DATA
================================================== */

const pages = [

  {
    title: "کتابچه جامع قالب‌های محتوا",
    cover: true,

    content: `
      <div class="book-cover">

        <div class="cover-symbol">
          📖
        </div>

        <div class="cover-line"></div>

        <div class="cover-label">
          نسخه دیجیتال
        </div>

        <h1>
          کتابچه جامع<br>
          قالب‌های محتوا
        </h1>

        <p class="cover-description">
          راهنمای کاربردی برای ساخت شروع‌های جذاب،
          نگه‌داشتن توجه مخاطب و تبدیل ایده‌های معمولی
          به محتوای مؤثر
        </p>

        <div class="cover-tags">
          <span>فرمول‌ها</span>
          <span>نمونه‌ها</span>
          <span>تمرین‌ها</span>
        </div>

        <button
          class="start-reading"
          id="startReadingBtn"
        >
          شروع مطالعه ←
        </button>

      </div>
    `
  },


  {
    title: "مقدمه",

    content: `
      <h1>مقدمه</h1>

      <p>
        در دنیای محتوا، اولین چیزی که مخاطب می‌بیند
        معمولاً خودِ محتوای شما نیست؛ بلکه شروع آن است.
      </p>

      <p>
        یک شروع خوب می‌تواند باعث شود مخاطب مکث کند،
        ادامه دهد و در نهایت با محتوای شما ارتباط برقرار کند.
      </p>

      <p>
        این کتابچه مجموعه‌ای کاربردی از قالب‌ها،
        فرمول‌ها و ایده‌هایی است که می‌توانند برای
        ساخت محتوای جذاب استفاده شوند.
      </p>

      <blockquote>
        محتوای خوب فقط دیده نمی‌شود؛
        باعث می‌شود مخاطب بخواهد ادامه دهد.
      </blockquote>
    `
  },


  {
    title: "قلاب محتوا چیست؟",

    content: `
      <h1>قلاب محتوا چیست؟</h1>

      <p>
        قلاب یا Hook همان بخش ابتدایی محتواست که
        وظیفه آن جلب توجه مخاطب و ایجاد انگیزه برای
        ادامه دادن است.
      </p>

      <h2>یک قلاب خوب چه کاری انجام می‌دهد؟</h2>

      <ul>
        <li>توجه مخاطب را متوقف می‌کند.</li>
        <li>کنجکاوی ایجاد می‌کند.</li>
        <li>یک سؤال در ذهن مخاطب می‌سازد.</li>
        <li>یک نتیجه جذاب را وعده می‌دهد.</li>
        <li>مخاطب را وارد داستان می‌کند.</li>
      </ul>
    `
  },


  {
    title: "قلاب کنجکاوی",

    content: `
      <h1>قلاب کنجکاوی</h1>

      <p>
        یکی از قدرتمندترین روش‌ها برای شروع محتوا،
        ایجاد یک شکاف اطلاعاتی است.
      </p>

      <p>
        یعنی بخشی از اطلاعات را بیان کنید اما پاسخ
        کامل را کمی به تأخیر بیندازید.
      </p>

      <h2>فرمول</h2>

      <blockquote>
        «چیزی وجود دارد که احتمالاً نمی‌دانید...»
      </blockquote>

      <p>
        این نوع شروع باعث می‌شود ذهن مخاطب بخواهد
        اطلاعات ناقص را کامل کند.
      </p>

      <h2>مثال</h2>

      <p>
        بیشتر افراد فکر می‌کنند برای جذب مخاطب باید
        محتوای پیچیده تولید کنند؛ اما واقعیت چیز دیگری است.
      </p>
    `
  },


  {
    title: "قلاب نتیجه",

    content: `
      <h1>قلاب نتیجه</h1>

      <p>
        در این مدل، نتیجه‌ای مشخص و جذاب را در ابتدای
        محتوا به مخاطب نشان می‌دهید.
      </p>

      <h2>فرمول</h2>

      <blockquote>
        «با انجام این کار می‌توانید به X برسید.»
      </blockquote>

      <p>
        هرچه نتیجه مشخص‌تر و قابل تصورتر باشد،
        قدرت قلاب بیشتر خواهد شد.
      </p>

      <h2>نمونه</h2>

      <p>
        با این تغییر ساده می‌توانید زمان تولید محتوای
        خود را تقریباً نصف کنید.
      </p>
    `
  },


  {
    title: "قلاب مشکل",

    content: `
      <h1>قلاب مشکل</h1>

      <p>
        در این روش، ابتدا مشکلی را مطرح می‌کنید که
        مخاطب احتمالاً آن را تجربه کرده است.
      </p>

      <p>
        وقتی مخاطب احساس کند شما مشکل او را می‌شناسید،
        احتمال ادامه دادن محتوا بیشتر می‌شود.
      </p>

      <h2>فرمول</h2>

      <blockquote>
        «اگر با X مشکل دارید، احتمالاً دلیلش Y است.»
      </blockquote>

      <ul>
        <li>مشکل را مشخص کنید.</li>
        <li>احساس مخاطب را درک کنید.</li>
        <li>راه‌حل را در ادامه ارائه دهید.</li>
      </ul>
    `
  },


  {
    title: "قلاب تضاد",

    content: `
      <h1>قلاب تضاد</h1>

      <p>
        تضاد زمانی شکل می‌گیرد که دو تصور متفاوت
        را کنار یکدیگر قرار دهید.
      </p>

      <blockquote>
        «همه فکر می‌کنند X درست است؛
        اما در واقع Y درست است.»
      </blockquote>

      <p>
        تضاد باعث ایجاد توقف ذهنی می‌شود و مخاطب
        دوست دارد بداند کدام دیدگاه درست است.
      </p>
    `
  },


  {
    title: "قلاب داستان",

    content: `
      <h1>قلاب داستان</h1>

      <p>
        انسان‌ها به صورت طبیعی با داستان ارتباط برقرار
        می‌کنند. بنابراین می‌توانید محتوا را با یک اتفاق
        واقعی یا تجربه شخصی شروع کنید.
      </p>

      <h2>فرمول</h2>

      <blockquote>
        «روزی که این اتفاق افتاد، اصلاً فکر نمی‌کردم
        نتیجه چنین چیزی باشد...»
      </blockquote>

      <p>
        داستان خوب باید سؤال یا کشش ایجاد کند تا
        مخاطب بخواهد پایان آن را بداند.
      </p>
    `
  },


  {
    title: "قلاب اعتراف",

    content: `
      <h1>قلاب اعتراف</h1>

      <p>
        اعتراف یک تجربه شخصی یا اشتباه می‌تواند
        شروع بسیار قدرتمندی برای محتوا باشد.
      </p>

      <blockquote>
        «من مدت زیادی این کار را اشتباه انجام می‌دادم.»
      </blockquote>

      <p>
        چنین شروعی حس صداقت و نزدیکی ایجاد می‌کند.
      </p>
    `
  },


  {
    title: "قلاب سؤال",

    content: `
      <h1>قلاب سؤال</h1>

      <p>
        یک سؤال خوب می‌تواند ذهن مخاطب را مستقیماً
        وارد موضوع کند.
      </p>

      <h2>ویژگی سؤال خوب</h2>

      <ul>
        <li>مخاطب بتواند خودش را در آن ببیند.</li>
        <li>پاسخ آن بدیهی نباشد.</li>
        <li>با نیاز واقعی مخاطب ارتباط داشته باشد.</li>
      </ul>

      <blockquote>
        «اگر امروز از صفر شروع می‌کردید،
        چه چیزی را متفاوت انجام می‌دادید؟»
      </blockquote>
    `
  },


  {
    title: "قلاب عدد و فهرست",

    content: `
      <h1>قلاب عدد و فهرست</h1>

      <p>
        استفاده از عدد باعث می‌شود ساختار محتوا
        برای مخاطب واضح‌تر شود.
      </p>

      <h2>نمونه‌ها</h2>

      <ul>
        <li>۵ اشتباه رایج در تولید محتوا</li>
        <li>۷ ایده برای شروع یک ویدئو</li>
        <li>۳ نکته که نتیجه را تغییر می‌دهد</li>
        <li>۱۰ روش برای افزایش توجه مخاطب</li>
      </ul>

      <p>
        عدد مشخص، وعده مشخصی به مخاطب می‌دهد.
      </p>
    `
  },


  {
    title: "قلاب اثبات",

    content: `
      <h1>قلاب اثبات</h1>

      <p>
        وقتی بتوانید نتیجه یا ادعای خود را با مدرک،
        تجربه یا مثال پشتیبانی کنید، اعتماد افزایش پیدا می‌کند.
      </p>

      <blockquote>
        «این روش را امتحان کردم و نتیجه آن این بود...»
      </blockquote>

      <p>
        اثبات می‌تواند شامل تجربه شخصی، داده،
        نمونه واقعی یا مقایسه قبل و بعد باشد.
      </p>
    `
  },


  {
    title: "قلاب هشدار",

    content: `
      <h1>قلاب هشدار</h1>

      <p>
        هشدار دادن درباره یک اشتباه رایج می‌تواند
        توجه مخاطب را سریع جلب کند.
      </p>

      <blockquote>
        «قبل از اینکه این کار را انجام دهید،
        این نکته را بدانید.»
      </blockquote>

      <p>
        هشدار باید واقعی و مرتبط باشد و نباید صرفاً
        برای ایجاد ترس استفاده شود.
      </p>
    `
  },


  {
    title: "قلاب فوریت",

    content: `
      <h1>قلاب فوریت</h1>

      <p>
        در این روش احساس اهمیت یا زمان محدود ایجاد می‌کنید.
      </p>

      <blockquote>
        «اگر قرار است این کار را انجام دهید،
        بهتر است این نکته را همین امروز بدانید.»
      </blockquote>

      <p>
        فوریت باید منطقی باشد و نباید با اطلاعات
        ساختگی مخاطب را تحت فشار قرار دهد.
      </p>
    `
  },


  {
    title: "قلاب تصویری",

    content: `
      <h1>قلاب تصویری</h1>

      <p>
        گاهی قبل از اینکه چیزی گفته شود، تصویر،
        حرکت یا تغییر صحنه می‌تواند توجه را جلب کند.
      </p>

      <ul>
        <li>شروع با نتیجه نهایی</li>
        <li>نمایش یک تغییر</li>
        <li>نمایش یک مشکل</li>
        <li>استفاده از حرکت سریع</li>
      </ul>
    `
  },


  {
    title: "قلاب صوتی",

    content: `
      <h1>قلاب صوتی</h1>

      <p>
        صدا نیز می‌تواند نقش مهمی در جلب توجه داشته باشد.
      </p>

      <p>
        یک جمله کوتاه، صدای متفاوت یا شروع ناگهانی
        می‌تواند مخاطب را متوجه محتوا کند.
      </p>

      <blockquote>
        صدای متفاوت + جمله کوتاه + پیام واضح
      </blockquote>
    `
  },


  {
    title: "قلاب تدوینی",

    content: `
      <h1>قلاب تدوینی</h1>

      <p>
        تدوین می‌تواند ریتم شروع محتوا را سریع‌تر و
        جذاب‌تر کند.
      </p>

      <ul>
        <li>کات سریع</li>
        <li>تغییر زاویه</li>
        <li>نمایش متن کوتاه</li>
        <li>تغییر اندازه تصویر</li>
        <li>شروع مستقیم بدون مقدمه طولانی</li>
      </ul>
    `
  },


  {
    title: "فرمول‌های آماده",

    content: `
      <h1>فرمول‌های آماده برای شروع محتوا</h1>

      <p>چند قالب ساده برای استفاده سریع:</p>

      <blockquote>
        «اگر X را انجام می‌دهید، این اشتباه را نکنید.»
      </blockquote>

      <blockquote>
        «۳ چیزی که ای کاش زودتر می‌دانستم...»
      </blockquote>

      <blockquote>
        «همه می‌گویند X، اما چیزی که من فهمیدم Y بود.»
      </blockquote>

      <blockquote>
        «قبل از اینکه X را انجام دهید، این را ببینید.»
      </blockquote>
    `
  },


  {
    title: "ترکیب چند قلاب",

    content: `
      <h1>ترکیب چند قلاب</h1>

      <p>
        لازم نیست همیشه فقط از یک نوع قلاب استفاده کنید.
        گاهی ترکیب دو یا سه تکنیک نتیجه بسیار بهتری دارد.
      </p>

      <h2>مثال</h2>

      <blockquote>
        «من این اشتباه را چند سال انجام دادم،
        اما بعد متوجه شدم فقط با یک تغییر کوچک
        می‌توانم نتیجه کاملاً متفاوتی بگیرم.»
      </blockquote>

      <p>
        در این مثال از داستان، اعتراف و وعده نتیجه
        هم‌زمان استفاده شده است.
      </p>
    `
  },


  {
    title: "تست A/B",

    content: `
      <h1>تست A/B برای قلاب‌ها</h1>

      <p>
        اگر بین دو شروع مختلف مردد هستید،
        هر دو را آزمایش کنید.
      </p>

      <h2>روش ساده</h2>

      <ol>
        <li>دو قلاب متفاوت بسازید.</li>
        <li>محتوای اصلی را تا حد امکان ثابت نگه دارید.</li>
        <li>نتایج را مقایسه کنید.</li>
        <li>نسخه بهتر را نگه دارید.</li>
      </ol>

      <p>
        هدف از تست، حدس زدن نیست؛ یاد گرفتن از رفتار واقعی مخاطب است.
      </p>
    `
  },


  {
    title: "معیارهای سنجش",

    content: `
      <h1>معیارهای سنجش</h1>

      <p>
        برای ارزیابی یک شروع خوب، فقط به تعداد بازدید
        نگاه نکنید.
      </p>

      <ul>
        <li>نرخ ماندگاری مخاطب</li>
        <li>نرخ کلیک</li>
        <li>تعامل</li>
        <li>اشتراک‌گذاری</li>
        <li>ذخیره کردن</li>
        <li>تبدیل مخاطب به مشتری یا دنبال‌کننده</li>
      </ul>
    `
  },


  {
    title: "اشتباهات رایج",

    content: `
      <h1>اشتباهات رایج در شروع محتوا</h1>

      <ul>
        <li>مقدمه بیش از حد طولانی</li>
        <li>گفتن اطلاعات غیرضروری</li>
        <li>وعده‌های غیرواقعی</li>
        <li>استفاده بیش از حد از کلیشه‌ها</li>
        <li>پیچیده کردن پیام</li>
        <li>تلاش برای شوکه کردن مخاطب بدون دلیل</li>
      </ul>

      <p>
        یک شروع خوب لزوماً عجیب‌ترین شروع نیست؛
        بلکه شروعی است که با نیاز مخاطب ارتباط دارد.
      </p>
    `
  },


  {
    title: "عیب‌یابی محتوا",

    content: `
      <h1>اگر محتوا نتیجه نگرفت چه کنیم؟</h1>

      <p>
        قبل از تغییر کل محتوا، ابتدا شروع آن را بررسی کنید.
      </p>

      <h2>چند سؤال مهم</h2>

      <ul>
        <li>آیا موضوع برای مخاطب مشخص است؟</li>
        <li>آیا در چند ثانیه اول دلیل ادامه دادن وجود دارد؟</li>
        <li>آیا وعده محتوا واضح است؟</li>
        <li>آیا شروع بیش از حد طولانی است؟</li>
        <li>آیا قلاب با محتوای اصلی هماهنگ است؟</li>
      </ul>
    `
  },


  {
    title: "تمرین اول",

    content: `
      <h1>تمرین اول: ساخت ۱۰ قلاب</h1>

      <p>
        یک موضوع انتخاب کنید و برای همان موضوع
        ۱۰ شروع متفاوت بنویسید.
      </p>

      <ol>
        <li>یک قلاب کنجکاوی</li>
        <li>یک قلاب نتیجه</li>
        <li>یک قلاب مشکل</li>
        <li>یک قلاب سؤال</li>
        <li>یک قلاب عددی</li>
        <li>یک قلاب داستانی</li>
        <li>یک قلاب هشدار</li>
        <li>یک قلاب تضاد</li>
        <li>یک قلاب اعتراف</li>
        <li>یک قلاب ترکیبی</li>
      </ol>
    `
  },


  {
    title: "تمرین دوم",

    content: `
      <h1>تمرین دوم: بازنویسی</h1>

      <p>
        یک محتوای قدیمی خود را انتخاب کنید.
        فقط شروع آن را بازنویسی کنید.
      </p>

      <p>
        سه نسخه مختلف بسازید و بررسی کنید
        کدام نسخه واضح‌تر، کوتاه‌تر و جذاب‌تر است.
      </p>
    `
  },


  {
    title: "چک‌لیست قلاب",

    content: `
      <h1>چک‌لیست نهایی قلاب</h1>

      <ul>
        <li>آیا شروع سریع است؟</li>
        <li>آیا موضوع مشخص است؟</li>
        <li>آیا مخاطب دلیل ادامه دادن دارد؟</li>
        <li>آیا جمله اول ساده است؟</li>
        <li>آیا وعده واقعی است؟</li>
        <li>آیا قلاب با محتوای اصلی هماهنگ است؟</li>
        <li>آیا می‌توان آن را کوتاه‌تر کرد؟</li>
      </ul>
    `
  },


  {
    title: "چالش ۷ روزه",

    content: `
      <h1>چالش ۷ روزه</h1>

      <p>
        برای هفت روز، هر روز حداقل پنج قلاب بنویسید.
      </p>

      <ol>
        <li>روز اول: کنجکاوی</li>
        <li>روز دوم: نتیجه</li>
        <li>روز سوم: مشکل</li>
        <li>روز چهارم: داستان</li>
        <li>روز پنجم: تضاد</li>
        <li>روز ششم: سؤال</li>
        <li>روز هفتم: ترکیب تکنیک‌ها</li>
      </ol>

      <p>
        بعد از هفت روز شما مجموعه‌ای از ده‌ها شروع
        آماده برای استفاده خواهید داشت.
      </p>
    `
  },


  {
    title: "اخلاق در تولید محتوا",

    content: `
      <h1>اخلاق در تولید محتوا</h1>

      <p>
        جلب توجه نباید به معنی فریب دادن مخاطب باشد.
      </p>

      <p>
        از تیترهای دروغین، وعده‌های غیرواقعی،
        ترساندن بی‌دلیل و اطلاعات ساختگی استفاده نکنید.
      </p>

      <blockquote>
        اعتماد مخاطب ارزشمندتر از یک کلیک بیشتر است.
      </blockquote>
    `
  },


  {
    title: "جمع‌بندی",

    content: `
      <h1>جمع‌بندی</h1>

      <p>
        یک محتوای خوب از همان اولین جمله شروع می‌شود.
      </p>

      <p>
        قلاب مناسب می‌تواند توجه ایجاد کند،
        اما چیزی که مخاطب را نگه می‌دارد،
        ارزش واقعی محتواست.
      </p>

      <p>
        از قالب‌های این کتابچه برای آزمایش استفاده کنید،
        نتایج را بررسی کنید و به مرور سبک مخصوص خودتان
        را بسازید.
      </p>

      <blockquote>
        شروع بهتر، فرصت بیشتری برای دیده شدن محتوای خوب شما ایجاد می‌کند.
      </blockquote>
    `
  },


  {
    title: "پایان",

    content: `
      <div class="book-cover">

        <div class="cover-symbol">
          ✓
        </div>

        <div class="cover-line"></div>

        <h1>
          پایان کتاب
        </h1>

        <p class="cover-description">
          حالا وقت آن است که این فرمول‌ها را
          در محتوای واقعی خودتان آزمایش کنید.
        </p>

        <div class="cover-tags">
          <span>تمرین کن</span>
          <span>آزمایش کن</span>
          <span>بهبود بده</span>
        </div>

      </div>
    `
  }

];


/* ==================================================
   VARIABLES
================================================== */

let currentPage = 0;

let zoomLevel = 1;

const TOTAL_PAGES = pages.length;


/* ==================================================
   ELEMENTS
================================================== */

const page =
  document.getElementById("page");

const pageTitle =
  document.getElementById("pageTitle");

const pageCounter =
  document.getElementById("pageCounter");

const progressBar =
  document.getElementById("progressBar");

const tocList =
  document.getElementById("tocList");

const tocPanel =
  document.getElementById("tocPanel");

const tocOverlay =
  document.getElementById("tocOverlay");


/* ==================================================
   PERSIAN NUMBERS
================================================== */

function persianNumber(number) {

  return String(number).replace(
    /\d/g,
    digit => "۰۱۲۳۴۵۶۷۸۹"[digit]
  );

}


/* ==================================================
   SHOW PAGE
================================================== */

function showPage() {

  if (!page || !pages[currentPage]) {
    return;
  }

  const data = pages[currentPage];

  page.innerHTML = data.content;

  page.style.fontSize =
    `${zoomLevel}em`;

  if (pageTitle) {
    pageTitle.textContent =
      data.title;
  }

  if (pageCounter) {

    pageCounter.textContent =
      `${persianNumber(currentPage + 1)} / ${persianNumber(TOTAL_PAGES)}`;

  }

  if (progressBar) {

    const progress =
      ((currentPage + 1) / TOTAL_PAGES) * 100;

    progressBar.style.width =
      `${progress}%`;

  }

  updateTOC();

  page.scrollTop = 0;

  saveProgress();

}


/* ==================================================
   NEXT PAGE
================================================== */

function nextPage() {

  if (currentPage < TOTAL_PAGES - 1) {

    currentPage++;

    showPage();

  }

}


/* ==================================================
   PREVIOUS PAGE
================================================== */

function previousPage() {

  if (currentPage > 0) {

    currentPage--;

    showPage();

  }

}


/* ==================================================
   FIRST PAGE
================================================== */

function firstPage() {

  currentPage = 0;

  showPage();

}


/* ==================================================
   LAST PAGE
================================================== */

function lastPage() {

  currentPage =
    TOTAL_PAGES - 1;

  showPage();

}


/* ==================================================
   ZOOM
================================================== */

function zoomIn() {

  zoomLevel =
    Math.min(zoomLevel + 0.1, 1.6);

  if (page) {
    page.style.fontSize =
      `${zoomLevel}em`;
  }

  localStorage.setItem(
    "bookZoom",
    zoomLevel
  );

}


function zoomOut() {

  zoomLevel =
    Math.max(zoomLevel - 0.1, 0.8);

  if (page) {
    page.style.fontSize =
      `${zoomLevel}em`;
  }

  localStorage.setItem(
    "bookZoom",
    zoomLevel
  );

}


/* ==================================================
   DARK MODE
================================================== */

function toggleTheme() {

  document.body.classList.toggle("dark");

  const dark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "bookTheme",
    dark ? "dark" : "light"
  );

}


/* ==================================================
   FULLSCREEN
================================================== */

function toggleFullscreen() {

  if (!document.fullscreenElement) {

    document.documentElement
      .requestFullscreen()
      .catch(() => {});

  } else {

    document
      .exitFullscreen()
      .catch(() => {});

  }

}


/* ==================================================
   TABLE OF CONTENTS
================================================== */

function buildTableOfContents() {

  if (!tocList) {
    return;
  }

  tocList.innerHTML = "";

  pages.forEach((item, index) => {

    const button =
      document.createElement("button");

    button.className =
      "toc-item";

    button.type =
      "button";

    button.innerHTML = `

      <span class="toc-number">
        ${persianNumber(index + 1)}
      </span>

      <span class="toc-title">
        ${item.title}
      </span>

    `;

    button.addEventListener(
      "click",
      () => {

        currentPage = index;

        showPage();

        closeTOC();

      }
    );

    tocList.appendChild(button);

  });

}


function updateTOC() {

  if (!tocList) {
    return;
  }

  const items =
    tocList.querySelectorAll(
      ".toc-item"
    );

  items.forEach(
    (item, index) => {

      item.classList.toggle(
        "active",
        index === currentPage
      );

    }
  );

}


/* ==================================================
   TOC OPEN / CLOSE
================================================== */

function openTOC() {

  if (tocPanel) {
    tocPanel.classList.add("open");
  }

  if (tocOverlay) {
    tocOverlay.classList.add("active");
  }

}


function closeTOC() {

  if (tocPanel) {
    tocPanel.classList.remove("open");
  }

  if (tocOverlay) {
    tocOverlay.classList.remove("active");
  }

}


/* ==================================================
   SAVE / RESTORE
================================================== */

function saveProgress() {

  localStorage.setItem(
    "bookPage",
    currentPage
  );

}


function restoreSettings() {

  const savedPage =
    parseInt(
      localStorage.getItem("bookPage")
    );

  if (
    !isNaN(savedPage) &&
    savedPage >= 0 &&
    savedPage < TOTAL_PAGES
  ) {

    currentPage =
      savedPage;

  }

  const savedZoom =
    parseFloat(
      localStorage.getItem("bookZoom")
    );

  if (!isNaN(savedZoom)) {

    zoomLevel =
      Math.min(
        Math.max(savedZoom, .8),
        1.6
      );

  }

  const savedTheme =
    localStorage.getItem("bookTheme");

  if (savedTheme === "dark") {

    document.body.classList.add("dark");

  }

}


/* ==================================================
   BUTTON EVENTS
================================================== */

document.addEventListener(
  "click",
  event => {

    const target =
      event.target.closest(
        "[data-action]"
      );

    if (!target) {
      return;
    }

    const action =
      target.dataset.action;

    switch (action) {

      case "next":
        nextPage();
        break;

      case "previous":
        previousPage();
        break;

      case "first":
        firstPage();
        break;

      case "last":
        lastPage();
        break;

      case "zoomIn":
        zoomIn();
        break;

      case "zoomOut":
        zoomOut();
        break;

      case "theme":
        toggleTheme();
        break;

      case "fullscreen":
        toggleFullscreen();
        break;

      case "toc":
        openTOC();
        break;

      case "closeToc":
        closeTOC();
        break;

    }

  }
);


/* ==================================================
   START READING
================================================== */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "#startReadingBtn"
      );

    if (!button) {
      return;
    }

    currentPage = 1;

    showPage();

    if (page) {
      page.scrollTop = 0;
    }

  }
);


/* ==================================================
   KEYBOARD
================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowDown"
    ) {

      nextPage();

    }

    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp"
    ) {

      previousPage();

    }

    if (event.key === "Home") {

      firstPage();

    }

    if (event.key === "End") {

      lastPage();

    }

    if (event.key === "Escape") {

      closeTOC();

    }

  }
);


/* ==================================================
   TOUCH SWIPE
================================================== */

let touchStartX = 0;

let touchEndX = 0;


if (page) {

  page.addEventListener(
    "touchstart",
    event => {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  page.addEventListener(
    "touchend",
    event => {

      touchEndX =
        event.changedTouches[0].screenX;

      handleSwipe();

    },
    { passive: true }
  );

}


function handleSwipe() {

  const distance =
    touchEndX - touchStartX;

  if (Math.abs(distance) < 60) {
    return;
  }

  if (distance < 0) {

    nextPage();

  } else {

    previousPage();

  }

}


/* ==================================================
   INITIALIZE
================================================== */

restoreSettings();

buildTableOfContents();

showPage();
