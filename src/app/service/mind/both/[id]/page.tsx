import React from 'react';
import MindBothViewer from "@/features/mind/ui/mind-both-viewer.screen";

const MindBothViewerPage = ({ params: { id } }: { params: { id: string } }) => {
  return <MindBothViewer questionId={id}/>;
};

export default MindBothViewerPage;
