

import FetchingServerTeam from "@/components/atom/fetching-rendering-team";

const Teams: React.FC = () => {
      return (
            <div id="teams-page">
                  <h1 className="text-[40px] font-[NeueMontreal] p-5 sm:ml-20">TEAMS</h1>
                  <p className=" font-[NeueMontreal] px-5 mb-5 sm:ml-20 sm:mb-0">Formici Support Team</p>
                  <FetchingServerTeam />
            </div>
      )
}

export default Teams;