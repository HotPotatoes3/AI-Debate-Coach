import React from "react";

interface TopicCardProps {
  topic: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
    <div className="card topic-card">
      <h2>Debate Topic</h2>
      <p>{topic}</p>
    </div>
  );
};

export default TopicCard;
