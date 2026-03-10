import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { en: 'Home', th: 'หน้าหลัก' },
  'nav.platform': { en: 'GEPP Intelligence', th: 'GEPP Intelligence' },
  'nav.scope3': { en: 'Scope 3 & ESG', th: 'Scope 3 & ESG' },
  'nav.traceability': { en: 'Materials Traceability', th: 'ระบบตรวจสอบย้อนกลับ' },
  'nav.about': { en: 'About', th: 'เกี่ยวกับเรา' },
  'nav.contact': { en: 'Contact', th: 'ติดต่อเรา' },
  'nav.login': { en: 'Login', th: 'เข้าสู่ระบบ' },
  'nav.demo': { en: 'Request Demo', th: 'ขอทดลองใช้' },

  // Hero
  'hero.title': { en: 'Your Waste Data, Solved.', th: 'ข้อมูลขยะของคุณ, จัดการแล้ว.' },
  'hero.subtitle': { en: 'GEPP Intelligence transforms complex waste streams into actionable ESG insights. Scope 3 reporting, carbon accounting, and materials traceability — all from one platform.', th: 'GEPP Intelligence เปลี่ยนข้อมูลขยะที่ซับซ้อนให้เป็น ESG insights ที่นำไปใช้ได้จริง รายงาน Scope 3, การบัญชีคาร์บอน และการตรวจสอบย้อนกลับวัสดุ ทั้งหมดจากแพลตฟอร์มเดียว' },
  'hero.cta': { en: 'Request a Demo', th: 'ขอทดลองใช้' },
  'hero.cta2': { en: 'Explore the Platform', th: 'สำรวจแพลตฟอร์ม' },

  // Stats
  'stats.diversion.label': { en: 'Landfill Waste Reduction', th: 'ลดขยะฝังกลบ' },
  'stats.diversion.value': { en: '11% → 58%', th: '11% → 58%' },
  'stats.diversion.desc': { en: 'Achieved for clients within 10 months', th: 'สำเร็จภายใน 10 เดือน' },
  'stats.cost.label': { en: 'Cost Reduction', th: 'ลดต้นทุน' },
  'stats.cost.value': { en: 'Up to 50%', th: 'สูงสุด 50%' },
  'stats.cost.desc': { en: '2020 GEPP benchmark', th: 'เกณฑ์มาตรฐาน GEPP ปี 2020' },
  'stats.ghg.label': { en: 'GHG Offset Equivalent', th: 'ค่าเทียบเท่าการชดเชย GHG' },
  'stats.ghg.value': { en: '77.5M+', th: '77.5 ล้าน+' },
  'stats.ghg.desc': { en: 'Trees equivalent in total annual GHG reduction', th: 'จำนวนต้นไม้เทียบเท่าในการลด GHG ต่อปี' },

  // Platform
  'platform.label': { en: 'The Platform', th: 'แพลตฟอร์ม' },
  'platform.title': { en: 'GEPP Intelligence Platform', th: 'แพลตฟอร์ม GEPP Intelligence' },
  'platform.desc': { en: 'A unified waste data management system that turns your waste operations into a strategic ESG asset. From data collection to GRI 306:2020 reporting — every data point is captured, verified, and actionable.', th: 'ระบบจัดการข้อมูลขยะที่รวมข้อมูลเป็นหนึ่งเดียว เปลี่ยนการจัดการขยะของคุณเป็นสินทรัพย์ ESG เชิงกลยุทธ์' },

  // Services
  'services.title': { en: 'What We Deliver', th: 'บริการของเรา' },
  'services.platform.title': { en: 'Waste Data Management', th: 'จัดการข้อมูลขยะ' },
  'services.platform.desc': { en: 'GEPP Segregation Standard, Material Footprint Analysis, GHG Reduction Calculation, and Waste Data Auditing.', th: 'มาตรฐานการแยกขยะ GEPP, การวิเคราะห์ Material Footprint, การคำนวณการลด GHG และการตรวจสอบข้อมูลขยะ' },
  'services.training.title': { en: 'Training & Awareness', th: 'การฝึกอบรม' },
  'services.training.desc': { en: 'Waste sorting workshops with real materials. Up to 100 attendees per session, 1.5 hours.', th: 'เวิร์คช็อปการคัดแยกขยะด้วยวัสดุจริง สูงสุด 100 คนต่อเซสชั่น' },
  'services.implementation.title': { en: 'Project Implementation', th: 'การดำเนินโครงการ' },
  'services.implementation.desc': { en: 'Waste Bank consulting, internal waste management, and Carbon Neutral event planning.', th: 'ที่ปรึกษาธนาคารขยะ จัดการขยะภายใน และวางแผนอีเวนต์ Carbon Neutral' },
  'services.collection.title': { en: 'Collection & Traceability', th: 'การเก็บขนและตรวจสอบ' },
  'services.collection.desc': { en: 'Fixed schedule collection, waste journey tracking, and multi-site traceability reporting.', th: 'การเก็บขนตามกำหนดเวลา ติดตามเส้นทางขยะ และรายงานตรวจสอบย้อนกลับหลายสาขา' },

  // Clients
  'clients.title': { en: 'Trusted by Industry Leaders', th: 'ได้รับความไว้วางใจจากผู้นำอุตสาหกรรม' },
  'clients.subtitle': { en: 'Energy, consumer goods, real estate, and food & beverage enterprises across Thailand.', th: 'อุตสาหกรรมพลังงาน สินค้าอุปโภคบริโภค อสังหาริมทรัพย์ และอาหารและเครื่องดื่มทั่วประเทศไทย' },

  // CTA
  'cta.title': { en: 'Start With Your Existing Data', th: 'เริ่มต้นจากข้อมูลที่มีอยู่' },
  'cta.subtitle': { en: 'Already managing waste? GEPP Intelligence connects to your current operations and unlocks Scope 3 reporting and ESG compliance — with zero disruption.', th: 'จัดการขยะอยู่แล้ว? GEPP Intelligence เชื่อมต่อกับการดำเนินงานปัจจุบันของคุณ เปิดใช้งานรายงาน Scope 3 และ ESG ได้ทันที' },
  'cta.existing': { en: 'For Existing Clients', th: 'สำหรับลูกค้าปัจจุบัน' },
  'cta.new': { en: 'New to GEPP?', th: 'ใหม่กับ GEPP?' },
  'cta.crosssell': { en: 'Activate Scope 3 Module', th: 'เปิดใช้งานโมดูล Scope 3' },
  'cta.demo': { en: 'Request a Demo', th: 'ขอทดลองใช้' },

  // About
  'about.title': { en: 'The Vision Behind GEPP', th: 'วิสัยทัศน์เบื้องหลัง GEPP' },
  'about.mission.title': { en: 'Our Mission', th: 'พันธกิจของเรา' },
  'about.mission.desc': { en: 'To prevent recyclables from going to landfill and make circular economy a reality for Thailand by driving behavioral change through data-driven waste sorting.', th: 'เพื่อป้องกันวัสดุรีไซเคิลไม่ให้ไปฝังกลบ และทำให้เศรษฐกิจหมุนเวียนเป็นจริงสำหรับประเทศไทย' },
  'about.vision.title': { en: 'Our Vision', th: 'วิสัยทัศน์ของเรา' },
  'about.vision.desc': { en: 'To help Thailand implement a more sustainable waste management system throughout the country — for the cleaner future of our next generations.', th: 'เพื่อช่วยให้ประเทศไทยมีระบบจัดการขยะที่ยั่งยืนมากขึ้นทั่วประเทศ เพื่ออนาคตที่สะอาดขึ้นของคนรุ่นหลัง' },
  'about.quote': { en: '"We want to change the way organizations manage their waste by focusing on using data to make decisions that lead to environmentally sustainable practices in the future."', th: '"เราต้องการเปลี่ยนวิธีที่องค์กรจัดการขยะ โดยมุ่งเน้นการใช้ข้อมูลในการตัดสินใจที่นำไปสู่แนวทางปฏิบัติที่ยั่งยืนต่อสิ่งแวดล้อมในอนาคต"' },

  // Contact
  'contact.title': { en: 'Get Started', th: 'เริ่มต้นใช้งาน' },
  'contact.subtitle': { en: 'Request a demo of the GEPP Intelligence Platform or activate Scope 3 reporting for your existing account.', th: 'ขอทดลองใช้แพลตฟอร์ม GEPP Intelligence หรือเปิดใช้งานรายงาน Scope 3 สำหรับบัญชีที่มีอยู่' },
  'contact.name': { en: 'Full Name', th: 'ชื่อ-นามสกุล' },
  'contact.email': { en: 'Work Email', th: 'อีเมลที่ทำงาน' },
  'contact.company': { en: 'Company', th: 'บริษัท' },
  'contact.type': { en: 'I am a...', th: 'ฉันเป็น...' },
  'contact.type.existing': { en: 'Existing GEPP Client', th: 'ลูกค้า GEPP ปัจจุบัน' },
  'contact.type.new': { en: 'New Prospect', th: 'ผู้สนใจใหม่' },
  'contact.message': { en: 'How can we help?', th: 'เราช่วยอะไรได้บ้าง?' },
  'contact.submit': { en: 'Submit Request', th: 'ส่งคำขอ' },

  // Footer
  'footer.tagline': { en: 'Digital Waste Platform that helps companies shift from "dispose of" to "manage" their waste successfully.', th: 'แพลตฟอร์มจัดการขยะดิจิทัลที่ช่วยให้บริษัทเปลี่ยนจาก "ทิ้ง" เป็น "จัดการ" ขยะได้สำเร็จ' },
  'footer.platform': { en: 'Platform', th: 'แพลตฟอร์ม' },
  'footer.company': { en: 'Company', th: 'บริษัท' },
  'footer.standards': { en: 'Standards', th: 'มาตรฐาน' },
  'footer.copyright': { en: '© 2025 GEPP Sa-Ard Co., Ltd. All rights reserved.', th: '© 2025 บริษัท จีอีพีพี สะอาด จำกัด สงวนลิขสิทธิ์' },

  // Scope 3 page
  'scope3.title': { en: 'Scope 3 & ESG Reporting', th: 'รายงาน Scope 3 & ESG' },
  'scope3.subtitle': { en: 'Turn your waste data into compliant ESG disclosures. GEPP Intelligence automates Scope 3 emissions calculations from your waste streams, aligned with GRI 306:2020 and global carbon accounting frameworks.', th: 'เปลี่ยนข้อมูลขยะของคุณเป็นการเปิดเผย ESG ที่เป็นไปตามมาตรฐาน' },

  // Traceability page
  'trace.title': { en: 'Materials Traceability', th: 'ระบบตรวจสอบย้อนกลับวัสดุ' },
  'trace.subtitle': { en: 'Track every material from point of disposal to final destination. Full chain-of-custody documentation for audit-ready compliance and stakeholder transparency.', th: 'ติดตามทุกวัสดุจากจุดทิ้งไปจนถึงปลายทาง' },

  // Platform page
  'platformPage.title': { en: 'GEPP Intelligence Platform', th: 'แพลตฟอร์ม GEPP Intelligence' },
  'platformPage.subtitle': { en: 'A complete waste data management system built for enterprise-scale operations. From micro-level data input to active data monitoring — your entire waste ecosystem, solved.', th: 'ระบบจัดการข้อมูลขยะครบวงจรสำหรับองค์กรขนาดใหญ่' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
