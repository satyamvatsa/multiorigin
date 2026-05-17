import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6 mt-10 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-white mb-3 mt-8">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-5 text-[15px]">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-orange-400 hover:text-orange-300 underline underline-offset-2 decoration-orange-500/40 hover:decoration-orange-400 transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-5 mb-5 space-y-2 text-gray-300 text-[15px]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-5 mb-5 space-y-2 text-gray-300 text-[15px]">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-orange-500/50 pl-5 my-6 text-gray-400 italic">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    hr: () => <hr className="my-8 border-white/10" />,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left text-gray-300 border border-white/10 rounded-xl overflow-hidden">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 bg-white/5 text-white font-semibold text-xs uppercase tracking-wider border-b border-white/10">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 border-b border-white/5">{children}</td>
    ),
  };
}
