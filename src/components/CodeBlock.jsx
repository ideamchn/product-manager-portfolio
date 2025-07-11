import React from 'react'

const CodeBlock = ({ code, language = 'javascript', title }) => {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden">
            {title && (
                <div className="bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300">
                    {title}
                </div>
            )}
            <pre className="p-4 overflow-x-auto">
        <code className={`language-${language} text-sm text-gray-100`}>
          {code}
        </code>
      </pre>
        </div>
    )
}

export default CodeBlock
