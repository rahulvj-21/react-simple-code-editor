import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';

const CodeEditor = () => {
    const [code, setCode] = useState('');

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div className="code-editor-container">
            <textarea
                className="code-input"
                value={code}
                placeholder='Type your code here'
                onChange={handleCodeChange}
                spellCheck="false"
            />
            <pre className="code-output">
                <code
                    className="language-javascript"
                    dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
                />
            </pre>
        </div>
    );
};

export default CodeEditor;
