export const getTimeline = () => {

  const data = localStorage.getItem("timeline");
  return data ? JSON.parse(data) : [];
};

export const addTimelineEntry = ({ friendName, friendId, type }) => {
  const entries = getTimeline();
  const newEntry = {
    id: Date.now(),
    friendName: friendName,
    friendId: friendId,
    type: type, // call text or videocall
    date: new Date().toISOString(), 
  };
  localStorage.setItem("timeline", JSON.stringify([newEntry, ...entries]));
};
