import Layout from "@/components/Layout";
import KanbanBoard from "@/components/KanbanBoard";
import AddTask from  "@/components/AddTask";
function MyTask() {
  return (
    <Layout>
      <div className="mt-20 flex">
          <div className="ml-auto">
            <AddTask/>
          </div>
      </div>
      <div className="mt-2 ml-80">   
          <KanbanBoard/>
      </div>     
    </Layout>
  );
}

export default MyTask;