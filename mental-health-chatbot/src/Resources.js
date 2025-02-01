const Resources = () => {
  const resources = [
    { title: "Meditation Guide", link: "#" },
    { title: "Breathing Exercises", link: "#" },
    { title: "Stress Management", link: "#" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Self-Help Resources</h2>
      <ul className="mt-4">
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} className="text-blue-500 underline">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
