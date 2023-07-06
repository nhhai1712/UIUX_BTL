import Layout from "@/components/Layout";
import KanbanBoard from "@/components/KanbanBoard";
import AddTask from  "@/components/AddTask";
import FilterButton from "@/components/FilterButton";
function MyTask() {
  return (
    <Layout>
      <div className="mt-20 flex">
          <div>
            {/* <FilterButton/> */}
          </div>
          <div className="ml-auto flex">
            {/* <FilterButton/> */}
            {/* <AddTask/> */}
          </div>
      </div>
      <div className="mt-2 ml-80">   
          <KanbanBoard/>
      </div>     
    </Layout>
  );
}

export default MyTask;