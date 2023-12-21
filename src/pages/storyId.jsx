import { useState } from 'react';

export default function StoryId() {
    const [content, setContent] = useState([]);
    const [paragraph, setParagraph] = useState([]);

    const [res, setRes] = useState([]);

    const handleContent = (e) => {
        const contents = e.target.value.split('{구분}').map((content) => {
            const tmp = content.replace(/\t/g, '').replace(/\"/g, '').split(' ');
            return [tmp[0], tmp[1], tmp[2]].join(' ');
        });
        contents.shift();

        setRes(getRes(contents, paragraph));
        setContent(contents);
    };
    const handleParagraph = (e) => {
        const paragraphs = e.target.value.split('{구분}');
        paragraphs.pop();

        setRes(getRes(content, paragraphs));
        setParagraph(paragraphs);
    };
    const checkPargraph = (str, par) => {
        return par
            .map((p, idx) => (p.includes(str) ? idx + 1 : -1))
            .filter((i) => i !== -1)
            .join(', ');
    };
    const getRes = (con, par) => {
        const res = con.map((content, idx) => {
            return (
                <tr>
                    <td>{idx + 2}</td>
                    <td>{content}</td>
                    <td>{checkPargraph(content, par)}</td>
                </tr>
            );
        });
        return (
            <table border={1}>
                <thead></thead>
                <tbody>{res}</tbody>
            </table>
        );
    };

    return (
        <>
            <section style={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
                <div style={{ flexGrow: 1 }}>
                    <h2>content</h2>
                    <textarea
                        onChange={handleContent}
                        defaultValue={content}
                        style={{ resize: 'both', height: '20vh' }}
                    ></textarea>
                </div>

                <div style={{ flexGrow: 1 }}>
                    <h2>paragraph</h2>
                    <textarea
                        onChange={handleParagraph}
                        defaultValue={paragraph}
                        style={{ resize: 'both', height: '20vh' }}
                    ></textarea>
                </div>
            </section>
            <div>{res}</div>
        </>
    );
}
