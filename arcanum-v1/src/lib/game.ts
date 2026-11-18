export type Progress={xp:number;solved:string[];order:string;entered:boolean};
export const initial:Progress={xp:0,solved:[],order:'',entered:false};
export const riddles=[{id:'r1',title:'دروازه اعداد',question:'عدد بعدی در دنباله ۲، ۴، ۸، ۱۶ چیست؟',answer:'32',hint:'هر عدد دو برابر عدد قبلی است.',explain:'هر جمله دو برابر جمله قبل است.'},{id:'r2',title:'رمز کاتب',question:'اگر A=1 و B=2 باشد، مجموع حروف CAB چند است؟',answer:'6',hint:'C=3، A=1 و B=2',explain:'۳ + ۱ + ۲ = ۶'},{id:'r3',title:'راز نگهبان',question:'سه کلید دارید و فقط یکی در را باز می‌کند. روی کلید درست نوشته شده «من نه اولی هستم و نه سومی». شماره کلید چیست؟',answer:'2',hint:'کلید وسطی را بررسی کن.',explain:'کلید دوم نه اول است و نه سوم.'}];
export const rooms=[
{id:'library',name:'کتابخانه بزرگ',symbol:'📚',description:'روش علمی و کشف منابع',xp:100},
{id:'sql',name:'تالار SQL',symbol:'⌘',description:'اجرای پرس‌وجو در SQLite',xp:0},
{id:'code',name:'آزمایشگاه کدنویسی',symbol:'⚙',description:'تمرین منطق Python و JavaScript',xp:200},
{id:'riddles',name:'تالار معماها',symbol:'◇',description:'سه معمای منطقی',xp:0},
{id:'potions',name:'آزمایشگاه معجون',symbol:'⚗',description:'ترکیب مواد خیالی با منطق',xp:400},
{id:'garden',name:'باغ گیاه‌شناسی',symbol:'❀',description:'فتوسنتز و سفر دانه‌ها',xp:300},
{id:'personality',name:'تالار شخصیت',symbol:'✧',description:'آزمون سه‌مرحله‌ای محفل',xp:0},
{id:'archives',name:'بایگانی اسرار',symbol:'▣',description:'رمز سزار و اسناد',xp:500},
{id:'dungeon',name:'سیاهچال فرار',symbol:'⚔',description:'سه قفل پیاپی برای فرار',xp:800},
{id:'observatory',name:'رصدخانه',symbol:'☽',description:'نور ماه و سرعت نور',xp:600},
{id:'masters',name:'تالار استادان',symbol:'♜',description:'استدلال و امنیت دیجیتال',xp:700},
{id:'forbidden',name:'راهروی ممنوعه',symbol:'✴',description:'چالش پایانی آکادمی',xp:1000}
];
