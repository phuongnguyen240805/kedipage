'use client';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import '@/app/globals.css';
import {
  serviceCategories,
} from '../services-dropdown/datas/services-data';
import ServiceTabs from '../services-dropdown/service-tabs';
import ServiceItem from '../services-dropdown/service-item';
import Boderyelow from '../ui/boder-yelow';

const ServicesDropdown = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<string>(
    Object.keys(serviceCategories)[0]
  );

  const activeCategory = serviceCategories[activeTab];
  const gridClasses =
    activeCategory?.gridCols ||
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';


  // Logic chia 4 cột tự động cho Business và Selling
  const isBusinessServiceTab = activeTab === 'business_services';
  const isSellingTab = activeTab === 'selling';
  let businessColumn1: any[] = [], businessColumn2: any[] = [], businessColumn3: any[] = [], businessColumn4: any[] = [];
  let sellingColumn1: any[] = [], sellingColumn2: any[] = [], sellingColumn3: any[] = [], sellingColumn4: any[] = [];
  if (isBusinessServiceTab) {
    const businessServices = activeCategory.services;
    const itemsPerCol = Math.ceil(businessServices.length / 4);
    businessColumn1 = businessServices.slice(0, itemsPerCol);
    businessColumn2 = businessServices.slice(itemsPerCol, itemsPerCol * 2);
    businessColumn3 = businessServices.slice(itemsPerCol * 2, itemsPerCol * 3);
    businessColumn4 = businessServices.slice(itemsPerCol * 3);
  }
if (isSellingTab) {
  const s = activeCategory.services; 
  sellingColumn1 = s.slice(0, 3);
  sellingColumn2 = s.slice(3, 6);
  sellingColumn3 = s.slice(6, 10);
  sellingColumn4 = s.slice(10, 11);
}

  // Logic cho tab "software_solutions"
  const isSoftwareSolutionTab = activeTab === 'software_solutions';
  const softwareServices = activeCategory.services;
  const softwareLeftPanel = softwareServices.slice(0, 4);
  const softwareRightPanel = softwareServices.slice(4);

  // Logic for "hosting_infrastructure"
  const isHostingTab = activeTab === 'hosting_infrastructure';
  const hostingServices = isHostingTab ? activeCategory.services : [];
  const hostingColumn1 = hostingServices.slice(0, 3);
  const hostingColumn2 = hostingServices.slice(3, 7);
  const hostingColumn3 = hostingServices.slice(7, 11);
  const hostingColumn4 = hostingServices.slice(11, 14);

  // Logic cho tab "course_instructor"
  const isInstructorTab = activeTab === 'course_instructor';
  const instructorServices = isInstructorTab ? activeCategory.services : [];
  const instructorColumn1 = instructorServices.slice(0, 2);

  return (
    <div className="fixed left-0 right-0 rounded-xl w-full z-[9999] pt-2">

      {/* Lớp nền mờ bao phủ toàn màn hình */}
      <div className="absolute inset-0 backdrop-blur-sm -z-10" />
            
      {/* Container nội dung */}
     <div className="max-w-[calc(100%-60px)] mx-auto w-full px-0 transition-all duration-300 rounded-xl">
        <Boderyelow>
        {/* 1. Thanh Tabs sát lề trái */}
        <div className="flex justify-start">
          <ServiceTabs
            categories={Object.keys(serviceCategories)}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            t={t}
          />
        </div>
        {/* 2. Khung nội dung dính liền với Tab */}
        <div className="w-full bg-kedi-navy border border-white/15 p-8 shadow-2xl -mt-[1px] rounded-b-xl">
          <p className="mb-6 italic text-gray-400 text-[13px] text-left">
            KEDI thiết kế sẵn lộ trình và giải pháp triển khai cho bạn
          </p>
          <div className="grid grid-cols-12 gap-8 text-left">
            {/* Cột trái - 9 cột */}
            <div className="col-span-12">
              {/* ... giữ nguyên logic render các service ... */}
             {(isBusinessServiceTab || isSellingTab) && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Cột 1 */}
    <div className="space-y-6 relative lg:after:content-[''] lg:after:absolute lg:after:-right-2 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-[1px] lg:after:bg-white/20 lg:after:z-10">
      {(isBusinessServiceTab ? businessColumn1 : sellingColumn1).map((service, index) => (
        <Boderyelow key={index}>
          <ServiceItem service={service} index={index} layout="horizontal" t={t} />
        </Boderyelow>
      ))}
    </div>

    {/* Cột 2 */}
    <div className="space-y-6 relative lg:after:content-[''] lg:after:absolute lg:after:-right-2 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-[1px] lg:after:bg-white/20 lg:after:z-10">
      {(isBusinessServiceTab ? businessColumn2 : sellingColumn2).map((service, index) => (
        <Boderyelow key={index}>
          <ServiceItem service={service} index={index + businessColumn1.length} layout="horizontal" t={t} />
        </Boderyelow>
      ))}
    </div>

    {/* Cột 3 */}
    <div className="space-y-6 relative lg:after:content-[''] lg:after:absolute lg:after:-right-2 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-[1px] lg:after:bg-white/20 lg:after:z-10">
      {(isBusinessServiceTab ? businessColumn3 : sellingColumn3).map((service, index) => (
        <Boderyelow key={index}>
          <ServiceItem service={service} index={index + businessColumn1.length + businessColumn2.length} layout="horizontal" t={t} />
        </Boderyelow>
      ))}
    </div>

    {/* Cột 4 - Cột mới thêm để lấp đầy khoảng trống */}
    <div className="space-y-6">
      {(isBusinessServiceTab ? businessColumn4 : sellingColumn4).map((service, index) => (
        <Boderyelow key={index}>
          <ServiceItem service={service} index={index + businessColumn1.length + businessColumn2.length + businessColumn3.length} layout="horizontal" t={t} />
        </Boderyelow>
      ))}
    </div>
  </div>
)}
              {isSoftwareSolutionTab && (
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Bảng trái - 70% */}
                  <div className="w-full lg:w-[75%]">
                    <div className="flex flex-row flex-wrap gap-3">
                      {softwareLeftPanel.map((service, index) => (
                        <div
                          key={`${service.href}-${index}`}
                          className="basis-full sm:basis-1/2 lg:basis-1/3 max-w-[200px] w-full"
                        >
                          <Boderyelow>
                            <ServiceItem
                              service={service}
                              index={index}
                              layout="card-image-top"
                              t={t}
                            />
                          </Boderyelow>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Bảng phải - 30% */}
                  <div className="w-full lg:w-[25%]">
                    <div className="flex flex-col gap-4">
                      {softwareRightPanel.map((service, index) => (
                        <Boderyelow key={`${service.href}-${index + 4}`}>
                          <ServiceItem
                            service={service}
                            index={index + 4}
                            layout="horizontal"
                            t={t}
                          />
                        </Boderyelow>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {isHostingTab && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-4">
                    {hostingColumn1.map((service, index) => (
                      <Boderyelow key={`${service.href}-${index}`}>
                        <ServiceItem
                          service={service}
                          index={index}
                          layout="horizontal"
                          t={t}
                        />
                      </Boderyelow>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {hostingColumn2.map((service, index) => (
                      <Boderyelow key={`${service.href}-${index + 3}`}>
                        <ServiceItem
                          service={service}
                          index={index + 3}
                          layout="compact-list"
                          t={t}
                        />
                      </Boderyelow>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {hostingColumn3.map((service, index) => (
                      <Boderyelow key={`${service.href}-${index + 7}`}>
                        <ServiceItem
                          service={service}
                          index={index + 7}
                          layout="compact-list"
                          t={t}
                        />
                      </Boderyelow>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {hostingColumn4.length > 0 ? (
                      hostingColumn4.map((service, index) => (
                        <Boderyelow key={`${service.href}-${index + 11}`}>
                          <ServiceItem
                            service={service}
                            index={index + 11}
                            layout="compact-list"
                            t={t}
                          />
                        </Boderyelow>
                      ))
                    ) : (
                      <div className="bg-muted p-4 rounded-lg text-center text-muted-foreground">
                        {t('common.updating_services')}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {isInstructorTab && (
                <div className="w-[70%] flex gap-4">
                  {instructorColumn1.map((service, index) => (
                    <Boderyelow key={`${service.href}-${index}`}>
                      <ServiceItem
                        service={service}
                        index={index}
                        layout="card-image-top"
                        t={t}
                      />
                    </Boderyelow>
                  ))}
                </div>
              )}
              {/* Default case */}
              {!isBusinessServiceTab &&
                !isSellingTab &&
                !isSoftwareSolutionTab &&
                !isHostingTab &&
                !isInstructorTab && (
                  <div className={`grid ${gridClasses} gap-4`}>
                    {activeCategory.services.map((service, index) => (
                      <Boderyelow key={`${service.href}-${index}`}>
                        <ServiceItem
                          service={service}
                          index={index}
                          layout="horizontal"
                          t={t}
                        />
                      </Boderyelow>
                    ))}
                  </div>
                )}
            </div>
          </div>
          
        </div>
           </Boderyelow>
      </div>
    </div>

  );
};

export default ServicesDropdown;
