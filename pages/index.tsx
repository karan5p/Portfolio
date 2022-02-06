import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview from "../components/project_preview";

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: "Dummy Project",
    desc: "This is a dummy project in python",
    linkUrl: "/dummy_project",
    imageUrl: "/placeholder.jpg",
  });
  projectMetadataArray.push({
    title: "Second Project",
    desc: "This is another project",
    linkUrl: "/automation",
    imageUrl: "/headphones.jpg",
  });
  projectMetadataArray.push({
    title: "Data Project",
    desc: "This is a data project",
    linkUrl: "/data_project",
    imageUrl: "/graph.jpg",
  });

  const projectPreviewElements = [];
  // <ProjectPreview {...projectPreviewData} />
  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }
  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
