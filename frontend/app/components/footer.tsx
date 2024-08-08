export default function Footer() {
  return (
    <div>
      <footer className="border-t border-white/40 pt-8">
        <div className="font-bold container mx-auto flex justify-between items-center">
          <div>
            <p>Hypermode Commerce</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/hypermodeAI/hyper-commerce"
              target="_blank"
              className="border border-white text-white py-2 px-4 rounded inline-flex items-center hover:opacity-80"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61C4.422 17.457 3.633 17.1 3.633 17.1c-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.511 11.511 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.62-5.479 5.92.43.372.812 1.104.812 2.222 0 1.606-.015 2.896-.015 3.29 0 .321.192.694.799.576C20.565 21.796 24 17.298 24 12 24 5.373 18.627 0 12 0z" />
              </svg>
              <span>Repo</span>
            </a>
            <a
              href="https://youtu.be/Me4YjNzR-cg"
              target="_blank"
              className="border hover:opacity-90 text-white text-sm py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a2.997 2.997 0 00-2.112-2.116C19.281 3.571 12 3.571 12 3.571s-7.281 0-9.386.499A2.997 2.997 0 00.502 6.186C0 8.291 0 12 0 12s0 3.709.502 5.814a2.997 2.997 0 002.112 2.116c2.105.499 9.386.499 9.386.499s7.281 0 9.386-.499a2.997 2.997 0 002.112-2.116C24 15.709 24 12 24 12s0-3.709-.502-5.814zM9.602 15.207V8.793L15.795 12 9.602 15.207z" />
              </svg>
              <span>Learn how it&apos;s made</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
