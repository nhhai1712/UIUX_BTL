import Layout from "@/components/Layout";
import KanbanBoardTeam from "@/components/KanbanBoardTeam";
import AddTask from  "@/components/AddTask";
function Team() {
  return (
    <Layout>
      <div className="mt-20 flex">
          {/* <div className="ml-auto">
            <AddTask/>
          </div> */}
      </div>
      <div className="mt-2 ml-80">   
          <KanbanBoardTeam />
      </div>     
    </Layout>
  );
}

export default Team;