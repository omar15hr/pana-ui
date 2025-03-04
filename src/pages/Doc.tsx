import { TableOfContent } from "../components/doc/TableOfContent";
import { Sidebar } from "../components/doc/ui/sidebar/Sidebar";

type ComponentPageLayout = {
  children: React.ReactNode;
};

export function Doc({ children }: ComponentPageLayout) {
  return (
    <div className={`bg-light-50 dark:bg-dark-50 antialiased transition text-white`}>
      <div className="lg:grid lg:grid-cols-[260px_1fr] 2xl:grid-cols-[260px_1fr_260px]">
        <Sidebar />
        <div className="grid-cols-[1fr_760px_1fr] px-4 pt-16 *:col-start-2 lg:grid lg:p-12 lg:pt-[92px]">
          <div className="fixed inset-x-0 top-0 isolate z-10 h-[50px]">
            <div className="body-mask-b-0 absolute inset-0 backdrop-blur-[1px]"></div>
            <div className="body-mask-b-0 absolute inset-0 backdrop-blur-[2px]"></div>
            <div className="body-mask-b-0 absolute inset-0 backdrop-blur-[3px]"></div>
            <div className="body-mask-b-0 absolute inset-0 backdrop-blur-[6px]"></div>
            <div className="body-mask-b-0 absolute inset-0 backdrop-blur-[12px]"></div>
          </div>
          <div className="fixed inset-x-0 bottom-0 isolate z-10 h-[100px]">
            <div className="body-mask-t-0 absolute inset-0 backdrop-blur-[1px]"></div>
            <div className="body-mask-t-0 absolute inset-0 backdrop-blur-[2px]"></div>
            <div className="body-mask-t-0 absolute inset-0 backdrop-blur-[3px]"></div>
            <div className="body-mask-t-0 absolute inset-0 backdrop-blur-[6px]"></div>
            <div className="body-mask-t-0 absolute inset-0 backdrop-blur-[12px]"></div>
          </div>
          {children}
        </div>
        <TableOfContent />
      </div>
    </div>
  );
}