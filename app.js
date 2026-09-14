/* =====================================================
   کتابچه جامع قالب‌های محتوا
   Digital Book
===================================================== */


/* =========================
   BOOK DATA
========================= */

const pages = [

  {
    title: "جلد",
    cover: true,
    content: `
      <div class="page-cover">

        <div class="cover-small">
          راهنمای کاربردی تولید محتوا
        </div>

        <div class="cover-title">
          کتابچه جامع<br>
          قالب‌های محتوا
        </div>

        <div class="cover-line"></div>

        <div class="cover-description">
          مجموعه‌ای کاربردی از قالب‌ها،
          فرمول‌ها و تکنیک‌های تولید محتوای مؤثر
        </div>

      </div>
    `
  },


  {
    title: "مقدمه",
    content: `
      <h1>مقدمه</h1>

      <p>
        تولید محتوای خوب فقط به داشتن ایده وابسته نیست.
        نحوه ارائه ایده، ساختار محتوا، شروع و پایان
        و انتخاب قالب مناسب، نقش مهمی در دیده شدن محتوا دارد.
      </p>

      <p>
        این کتابچه مجموعه‌ای از قالب‌های کاربردی برای
        ساخت محتوای جذاب، قابل فهم و اثرگذار است.
      </p>

      <div class="highlight">
        هدف قالب این نیست که محتوای شما را مصنوعی کند؛
        هدف آن است که ایده خوب شما بهتر دیده و فهمیده شود.
      </div>

      <p>
        می‌توانید این قالب‌ها را برای ویدئو،
        پست، استوری، آموزش، فروش، معرفی محصول
        و بسیاری از انواع دیگر محتوا استفاده کنید.
      </p>
    `
  },


  {
    title: "قالب اثبات و اعتبار",
    content: `
      <h1>قالب اثبات و اعتبار</h1>

      <p>
        وقتی می‌خواهید مخاطب حرف شما را باور کند،
        بهتر است به جای توضیح طولانی، نتیجه یا مدرک
        را زودتر نشان دهید.
      </p>

      <h2>اصل مهم</h2>

      <div class="highlight">
        نتیجه را زود نشان بده، سپس توضیح بده چگونه به آن رسیدی.
      </div>

      <h2>چند روش کاربردی</h2>

      <ul>
        <li>نمایش نتیجه یا نمونه واقعی</li>
        <li>نمایش روند انجام کار</li>
        <li>استفاده از تجربه واقعی</li>
        <li>نمایش قبل و بعد</li>
        <li>استفاده از عدد همراه با زمان و شرایط</li>
        <li>نمایش اسکرین‌شات با حفظ حریم خصوصی</li>
        <li>ارائه نمونه‌ای که قابل بررسی باشد</li>
      </ul>

      <div class="formula">
        نتیجه → مدرک → توضیح → روش انجام
      </div>
    `
  },


  {
    title: "قبل و بعد",
    content: `
      <h1>قالب قبل و بعد</h1>

      <p>
        یکی از ساده‌ترین روش‌ها برای نشان دادن نتیجه،
        مقایسه وضعیت قبل و بعد از انجام یک کار است.
      </p>

      <h2>برای اثرگذاری بیشتر</h2>

      <ul>
        <li>شرایط قبل را واضح نشان دهید.</li>
        <li>شرایط بعد را با همان معیار مقایسه کنید.</li>
        <li>اگر عدد دارید، عدد را همراه با زمان بیان کنید.</li>
        <li>از نتیجه غیرواقعی یا اغراق‌آمیز پرهیز کنید.</li>
      </ul>

      <div class="highlight">
        عدد بدون زمان و شرایط، اطلاعات کاملی به مخاطب نمی‌دهد.
      </div>
    `
  },


  {
    title: "قالب هشدار و فوریت",
    content: `
      <h1>قالب هشدار و فوریت</h1>

      <p>
        هشدار زمانی مؤثر است که واقعی، مرتبط و قابل پیشگیری باشد.
      </p>

      <h2>یک هشدار خوب باید:</h2>

      <ul>
        <li>واقعی باشد.</li>
        <li>به مخاطب مربوط باشد.</li>
        <li>دلیل مشخص داشته باشد.</li>
        <li>راه جلوگیری یا اقدام بعدی را نشان دهد.</li>
      </ul>

      <div class="highlight">
        از ایجاد فوریت جعلی یا ترساندن بی‌دلیل مخاطب خودداری کنید.
      </div>

      <div class="formula">
        مشکل واقعی → پیامد → راه جلوگیری → اقدام
      </div>
    `
  },


  {
    title: "قالب تصویری",
    content: `
      <h1>قالب آموزشی تصویری</h1>

      <p>
        در محتوای تصویری، نحوه نمایش موضوع می‌تواند
        به اندازه خود آموزش اهمیت داشته باشد.
      </p>

      <h2>الگوهای کاربردی</h2>

      <ul>
        <li>نتیجه اول</li>
        <li>حرکت معنادار</li>
        <li>نمای نزدیک</li>
        <li>تضاد واضح</li>
        <li>شروع وسط عمل</li>
        <li>الگوی شکسته</li>
      </ul>

      <div class="highlight">
        تصویر باید به انتقال مفهوم کمک کند؛
        نه اینکه فقط برای زیباتر شدن ویدئو استفاده شود.
      </div>
    `
  },


  {
    title: "قالب صوتی و تدوینی",
    content: `
      <h1>قالب صوتی و تدوینی</h1>

      <p>
        صدا و تدوین می‌توانند ریتم محتوا را تغییر دهند
        و توجه مخاطب را در ثانیه‌های ابتدایی حفظ کنند.
      </p>

      <h2>تکنیک‌های کاربردی</h2>

      <ul>
        <li>جمله نیمه‌کاره</li>
        <li>صدای نتیجه</li>
        <li>سکوت هدفمند</li>
        <li>برش سریع اولیه</li>
      </ul>

      <div class="formula">
        هوک → تصویر → صدا → توضیح → نتیجه
      </div>

      <p>
        ترکیب درست این عناصر می‌تواند بدون نیاز به شلوغی،
        ریتم مناسبی برای محتوا ایجاد کند.
      </p>
    `
  },


  {
    title: "فرمول‌های آماده",
    content: `
      <h1>فرمول‌های آماده</h1>

      <h2>بخش اول</h2>

      <div class="formula">
        مشکل → اشتباه رایج → راه‌حل → نتیجه
      </div>

      <div class="formula">
        نتیجه → توضیح → مراحل → دعوت به اقدام
      </div>

      <div class="formula">
        سؤال → پاسخ کوتاه → مثال → جمع‌بندی
      </div>

      <h2>بخش دوم</h2>

      <div class="formula">
        باور رایج → شکستن باور → دلیل → روش درست
      </div>

      <div class="formula">
        قبل → تغییر → بعد → علت تغییر
      </div>
    `
  },


  {
    title: "فرمول‌های پیشرفته",
    content: `
      <h1>فرمول‌های پیشرفته</h1>

      <p>
        زمانی که با قالب‌های پایه راحت شدید،
        می‌توانید چند ساختار را با یکدیگر ترکیب کنید.
      </p>

      <div class="formula">
        هوک → تضاد → اثبات → آموزش → نتیجه → CTA
      </div>

      <div class="formula">
        سؤال → کنجکاوی → نمونه واقعی → توضیح → نتیجه
      </div>

      <div class="formula">
        اشتباه → پیامد → اصلاح → اثبات → اقدام
      </div>

      <div class="highlight">
        قالب خوب، قالبی است که با موضوع و هدف محتوا هماهنگ باشد.
      </div>
    `
  },


  {
    title: "هوش مصنوعی و محتوا",
    content: `
      <h1>نمونه‌های کاربردی در AI و محتوا</h1>

      <p>
        برای تولید محتوای بهتر با ابزارهای هوش مصنوعی،
        بهتر است درخواست خود را با ساختار مشخص بنویسید.
      </p>

      <h2>ساختار پیشنهادی</h2>

      <ul>
        <li>موضوع</li>
        <li>مخاطب</li>
        <li>هدف</li>
        <li>لحن</li>
        <li>قالب خروجی</li>
        <li>محدودیت‌ها</li>
      </ul>

      <div class="formula">
        نقش + هدف + زمینه + محدودیت + خروجی مورد انتظار
      </div>
    `
  },


  {
    title: "فروش و کسب‌وکار",
    content: `
      <h1>فروش و کسب‌وکار</h1>

      <p>
        در محتوای فروش، فقط معرفی محصول کافی نیست.
        باید مشکل مخاطب و نتیجه‌ای که دریافت می‌کند
        نیز روشن باشد.
      </p>

      <div class="formula">
        مشکل مشتری → هزینه مشکل → راه‌حل → اثبات → پیشنهاد
      </div>

      <h2>نکته مهم</h2>

      <p>
        به جای تمرکز بیش از حد روی ویژگی‌ها،
        مزیت و نتیجه‌ای را که برای مشتری ایجاد می‌شود توضیح دهید.
      </p>
    `
  },


  {
    title: "زیبایی و سبک زندگی",
    content: `
      <h1>زیبایی، فیتنس و سبک زندگی</h1>

      <p>
        در این حوزه‌ها، تصویر و تجربه واقعی اهمیت زیادی دارد.
      </p>

      <ul>
        <li>نتیجه واقعی</li>
        <li>روند انجام کار</li>
        <li>اشتباهات رایج</li>
        <li>تغییرات مرحله‌ای</li>
        <li>تجربه شخصی</li>
      </ul>

      <div class="highlight">
        ادعای نتیجه باید متناسب با واقعیت و شرایط فرد باشد.
      </div>
    `
  },


  {
    title: "آموزش و خدمات",
    content: `
      <h1>آموزش، مالی و خدمات</h1>

      <p>
        در آموزش، مهم‌ترین مسئله این است که مخاطب
        بتواند بعد از دیدن محتوا کاری انجام دهد.
      </p>

      <h2>قالب ساده آموزشی</h2>

      <div class="formula">
        مسئله → توضیح ساده → مثال → تمرین → نتیجه
      </div>

      <p>
        برای موضوعات مالی و خدمات تخصصی نیز
        شفافیت، محدودیت‌ها و شرایط استفاده اهمیت زیادی دارد.
      </p>
    `
  },


  {
    title: "از قالب ضعیف تا قوی",
    content: `
      <h1>از قالب ضعیف تا قالب قوی</h1>

      <h2>ضعیف</h2>

      <div class="highlight">
        سلام، امروز می‌خواهم درباره یک موضوع مهم صحبت کنم...
      </div>

      <h2>قوی‌تر</h2>

      <div class="highlight">
        اگر این اشتباه را انجام می‌دهی،
        احتمالاً بخشی از نتیجه را از دست می‌دهی.
      </div>

      <p>
        تفاوت اصلی در این است که نسخه قوی‌تر
        از همان ابتدا دلیل ادامه دادن را به مخاطب می‌دهد.
      </p>
    `
  },


  {
    title: "قالب، بدنه و پایان",
    content: `
      <h1>قالب، بدنه و پایان</h1>

      <p>
        هر محتوای خوب را می‌توان به سه بخش اصلی تقسیم کرد.
      </p>

      <div class="formula">
        شروع → بدنه → پایان
      </div>

      <h2>شروع</h2>
      <p>
        توجه و دلیل ادامه دادن را ایجاد می‌کند.
      </p>

      <h2>بدنه</h2>
      <p>
        اطلاعات، داستان، آموزش یا اثبات را ارائه می‌دهد.
      </p>

      <h2>پایان</h2>
      <p>
        نتیجه‌گیری یا اقدام بعدی را مشخص می‌کند.
      </p>
    `
  },


  {
    title: "نوشتن قالب در ۶ مرحله",
    content: `
      <h1>نوشتن قالب در ۶ مرحله</h1>

      <ol>
        <li>هدف محتوا را مشخص کن.</li>
        <li>مخاطب را مشخص کن.</li>
        <li>نتیجه مطلوب را مشخص کن.</li>
        <li>هوک مناسب انتخاب کن.</li>
        <li>بدنه محتوا را طراحی کن.</li>
        <li>پایان و اقدام بعدی را بنویس.</li>
      </ol>

      <div class="formula">
        هدف + مخاطب + نتیجه + هوک + بدنه + پایان
      </div>
    `
  },


  {
    title: "آزمون A/B",
    content: `
      <h1>آزمون A/B قالب</h1>

      <p>
        اگر بین دو شروع یا دو قالب مختلف مردد هستید،
        هر دو را آزمایش کنید.
      </p>

      <h2>چه چیزهایی را مقایسه کنیم؟</h2>

      <ul>
        <li>نگهداشت مخاطب</li>
        <li>مدت تماشا</li>
        <li>بازپخش</li>
        <li>اشتراک‌گذاری</li>
        <li>اقدام یا کلیک</li>
      </ul>

      <div class="highlight">
        تصمیم را بر اساس داده بگیرید، نه فقط احساس شخصی.
      </div>
    `
  },


  {
    title: "اعداد مهم",
    content: `
      <h1>اعداد مهم محتوا</h1>

      <p>
        برای بررسی عملکرد محتوا، فقط تعداد بازدید را نبینید.
      </p>

      <ul>
        <li>نگهداشت مخاطب</li>
        <li>مدت تماشا</li>
        <li>بازپخش</li>
        <li>اشتراک‌گذاری</li>
        <li>ذخیره</li>
        <li>اقدام</li>
      </ul>

      <div class="formula">
        بازدید بالا همیشه به معنی محتوای موفق نیست.
      </div>
    `
  },


  {
    title: "عیب‌یابی",
    content: `
      <h1>عیب‌یابی سریع</h1>

      <h2>مخاطب در ابتدا خارج می‌شود؟</h2>
      <p>
        شروع محتوا را کوتاه‌تر و نتیجه را زودتر نشان دهید.
      </p>

      <h2>تماشا خوب است ولی اقدام کم است؟</h2>
      <p>
        پایان و دعوت به اقدام را واضح‌تر کنید.
      </p>

      <h2>محتوا دیده نمی‌شود؟</h2>
      <p>
        موضوع، بسته‌بندی، عنوان و شروع محتوا را بررسی کنید.
      </p>
    `
  },


  {
    title: "برگه تمرین",
    content: `
      <h1>برگه تمرین ساخت قالب</h1>

      <div class="highlight">
        موضوع:
        __________________________
      </div>

      <div class="highlight">
        مخاطب:
        __________________________
      </div>

      <div class="highlight">
        نتیجه‌ای که می‌خواهم:
        __________________________
      </div>

      <div class="highlight">
        هوک:
        __________________________
      </div>

      <div class="highlight">
        بدنه:
        __________________________
      </div>

      <div class="highlight">
        پایان:
        __________________________
      </div>
    `
  },


  {
    title: "چک‌لیست انتشار",
    content: `
      <h1>چک‌لیست قبل از انتشار</h1>

      <ul>
        <li>آیا شروع محتوا واضح است؟</li>
        <li>آیا مخاطب دلیل ادامه دادن دارد؟</li>
        <li>آیا نتیجه یا ارزش محتوا مشخص است؟</li>
        <li>آیا متن قابل فهم است؟</li>
        <li>آیا تصویر و صدا مناسب هستند؟</li>
        <li>آیا پایان مشخص است؟</li>
        <li>آیا دعوت به اقدام طبیعی است؟</li>
        <li>آیا ادعاها واقعی و قابل دفاع هستند؟</li>
      </ul>
    `
  },


  {
    title: "چالش ۷ روزه",
    content: `
      <h1>چالش ۷ روزه</h1>

      <p>
        برای تمرین قالب‌ها، هر روز یک نوع محتوا بسازید.
      </p>

      <ol>
        <li>روز اول: نتیجه اول</li>
        <li>روز دوم: قبل و بعد</li>
        <li>روز سوم: هشدار واقعی</li>
        <li>روز چهارم: آموزش تصویری</li>
        <li>روز پنجم: تجربه واقعی</li>
        <li>روز ششم: آزمون دو هوک</li>
        <li>روز هفتم: ترکیب چند قالب</li>
      </ol>

      <div class="formula">
        تمرین مداوم → شناخت قالب مناسب → محتوای بهتر
      </div>
    `
  },


  {
    title: "مرز قالب و فریب",
    content: `
      <h1>مرز قالب و فریب</h1>

      <p>
        قالب باید به انتقال بهتر پیام کمک کند،
        نه اینکه مخاطب را با وعده دروغین فریب دهد.
      </p>

      <ul>
        <li>از ادعای غیرواقعی استفاده نکنید.</li>
        <li>فوریت جعلی ایجاد نکنید.</li>
        <li>نتایج استثنایی را عمومی جلوه ندهید.</li>
        <li>از ترساندن بی‌دلیل مخاطب پرهیز کنید.</li>
      </ul>

      <div class="highlight">
        اعتماد مخاطب ارزشمندتر از یک بازدید کوتاه‌مدت است.
      </div>
    `
  },


  {
    title: "جمع‌بندی",
    content: `
      <h1>جمع‌بندی نهایی</h1>

      <p>
        قالب، مسیر حرکت محتواست.
        اما کیفیت ایده، صداقت، اجرا و شناخت مخاطب
        همچنان نقش اصلی را دارند.
      </p>

      <div class="formula">
        ایده خوب + قالب مناسب + اجرای خوب = محتوای مؤثر
      </div>

      <p>
        قالب‌های این کتابچه را آزمایش کنید،
        نتایج را اندازه بگیرید و بر اساس داده‌ها
        قالب مناسب خودتان را پیدا کنید.
      </p>

      <div class="highlight">
        بهترین قالب، قالبی است که برای مخاطب شما
        و هدف محتوای شما نتیجه ایجاد کند.
      </div>
    `
  }

];


/* =========================
   VARIABLES
========================= */

let currentPage = 0;

const pagesContainer = document.getElementById("pages");

const pageNumber = document.getElementById("pageNumber");

const totalPages = document.getElementById("totalPages");

const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const prevBottomBtn = document.getElementById("prevBottomBtn");

const nextBottomBtn = document.getElementById("nextBottomBtn");

const firstBtn = document.getElementById("firstBtn");

const lastBtn = document.getElementById("lastBtn");

const toc = document.getElementById("toc");

const sideMenu = document.getElementById("sideMenu");

const overlay = document.getElementById("overlay");

const menuBtn = document.getElementById("menuBtn");

const closeMenu = document.getElementById("closeMenu");

const themeBtn = document.getElementById("themeBtn");


/* =========================
   CREATE PAGES
========================= */

function createPages() {

  pagesContainer.innerHTML = "";

  pages.forEach((item, index) => {

    const page = document.createElement("article");

    page.className = "page";

    page.dataset.index = index;

    page.innerHTML = `
      ${item.content}

      <div class="page-number">
        ${toPersianNumber(index + 1)}
      </div>
    `;

    pagesContainer.appendChild(page);

  });

  totalPages.textContent = toPersianNumber(pages.length);

}


/* =========================
   TABLE OF CONTENTS
========================= */

function createTOC() {

  toc.innerHTML = "";

  pages.forEach((item, index) => {

    if (index === 0) return;

    const button = document.createElement("button");

    button.textContent =
      `${toPersianNumber(index)}. ${item.title}`;

    button.addEventListener("click", () => {

      goToPage(index);

      closeSideMenu();

    });

    toc.appendChild(button);

  });

}


/* =========================
   SHOW PAGE
========================= */

function showPage() {

  const pageElements =
    document.querySelectorAll(".page");

  pageElements.forEach((page, index) => {

    page.classList.toggle(
      "active",
      index === currentPage
    );

  });


  pageNumber.textContent =
    toPersianNumber(currentPage + 1);


  const percent =
    ((currentPage + 1) / pages.length) * 100;

  progressBar.style.width =
    percent + "%";


  prevBtn.disabled =
    currentPage === 0;

  prevBottomBtn.disabled =
    currentPage === 0;

  nextBtn.disabled =
    currentPage === pages.length - 1;

  nextBottomBtn.disabled =
    currentPage === pages.length - 1;


  updateTOC();


  // Scroll page to top
  const activePage =
    document.querySelector(".page.active");

  if (activePage) {
    activePage.scrollTop = 0;
  }

}


/* =========================
   GO TO PAGE
========================= */

function goToPage(index) {

  if (index < 0) {
    index = 0;
  }

  if (index >= pages.length) {
    index = pages.length - 1;
  }

  currentPage = index;

  showPage();

}


/* =========================
   NEXT / PREVIOUS
========================= */

function nextPage() {

  if (currentPage < pages.length - 1) {
    currentPage++;

    showPage();
  }

}


function previousPage() {

  if (currentPage > 0) {
    currentPage--;

    showPage();
  }

}


/* =========================
   TOC ACTIVE
========================= */

function updateTOC() {

  const buttons =
    toc.querySelectorAll("button");

  buttons.forEach((button, index) => {

    button.classList.toggle(
      "active",
      index + 1 === currentPage
    );

  });

}


/* =========================
   PERSIAN NUMBERS
========================= */

function toPersianNumber(number) {

  const digits = "۰۱۲۳۴۵۶۷۸۹";

  return String(number).replace(
    /\d/g,
    digit => digits[digit]
  );

}


/* =========================
   BUTTON EVENTS
========================= */

prevBtn.addEventListener(
  "click",
  previousPage
);

nextBtn.addEventListener(
  "click",
  nextPage
);

prevBottomBtn.addEventListener(
  "click",
  previousPage
);

nextBottomBtn.addEventListener(
  "click",
  nextPage
);

firstBtn.addEventListener(
  "click",
  () => goToPage(0)
);

lastBtn.addEventListener(
  "click",
  () => goToPage(pages.length - 1)
);


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowDown"
    ) {
      nextPage();
    }

    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowUp"
    ) {
      previousPage();
    }

    if (event.key === "Home") {
      goToPage(0);
    }

    if (event.key === "End") {
      goToPage(pages.length - 1);
    }

  }
);


/* =========================
   TOUCH / SWIPE
========================= */

let touchStartX = 0;

let touchEndX = 0;


pagesContainer.addEventListener(
  "touchstart",
  event => {

    touchStartX =
      event.changedTouches[0].screenX;

  },
  { passive: true }
);


pagesContainer.addEventListener(
  "touchend",
  event => {

    touchEndX =
      event.changedTouches[0].screenX;

    handleSwipe();

  },
  { passive: true }
);


function handleSwipe() {

  const distance =
    touchEndX - touchStartX;

  if (Math.abs(distance) < 50) {
    return;
  }

  /*
    در حالت راست‌به‌چپ:
    کشیدن به چپ = صفحه بعد
    کشیدن به راست = صفحه قبل
  */

  if (distance < 0) {
    nextPage();
  } else {
    previousPage();
  }

}


/* =========================
   MENU
========================= */

function openSideMenu() {

  sideMenu.classList.add("open");

  overlay.classList.add("show");

}


function closeSideMenu() {

  sideMenu.classList.remove("open");

  overlay.classList.remove("show");

}


menuBtn.addEventListener(
  "click",
  openSideMenu
);


closeMenu.addEventListener(
  "click",
  closeSideMenu
);


overlay.addEventListener(
  "click",
  closeSideMenu
);


/* =========================
   THEME
========================= */

function loadTheme() {

  const savedTheme =
    localStorage.getItem("book-theme");

  if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

  }

}


themeBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle("dark");

    const dark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "book-theme",
      dark ? "dark" : "light"
    );

    themeBtn.textContent =
      dark ? "☀" : "☾";

  }
);


/* =========================
   INITIALIZE
========================= */

createPages();

createTOC();

loadTheme();

showPage();
