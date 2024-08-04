import React from 'react';
import MindView from "@/features/mind/ui/mind-view.screen";

const MindViewPage = ({ params: { id } }: { params: { id: string } }) => {
  return <MindView id={id}/>;
};

export default MindViewPage;
