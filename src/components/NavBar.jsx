const navLinks = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "About", href: "#" },
  { id: 3, name: "Contact", href: "#" },
];

export default function NavBar() {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center w-full rounded-t-lg">
      <div className="text-3xl font-bold">
        <h2>LearnQuest</h2>
      </div>
      <div>
        <ul className="flex gap-10 p-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="hover:text-gray-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}