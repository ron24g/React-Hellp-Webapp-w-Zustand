import React from 'react';
import { prettyPrintJson } from 'pretty-print-json';

const Debugger = (props) => {
    <div className="debug">
        <p>
            { props.message }
        </p>
        <code>
            { prettyPrintJson.toHtml(props.object) }
        </code>
    </div>
}
