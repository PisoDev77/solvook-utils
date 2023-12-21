import { useState } from 'react';

export default function Split() {
    const [ta1, setTa1] = useState('');
    const [res1, setRes1] = useState([]);
    const handleChange = (e) => {
        const { value } = e.target;

        let formerUnitId = 0;
        let formerPargrapId = 1;
        const arr = value
            .split('//')
            .filter((i) => i.trim() !== '')
            .map((i, idx) => {
                const [paragraphs, json] = i.split('{구분}');
                const { textbook_id, unit_id, page_info, meta_data } = JSON.parse(json.replace(/\n/g, ' '));

                return (
                    <tr>
                        -54
                        <td>{idx + 44}</td>
                        <td>{textbook_id}</td>
                        {unit_id === formerUnitId ? (
                            <>
                                <td>{formerUnitId}</td>
                                <td>{++formerPargrapId}</td>
                                <td>{page_info}</td>
                                <td>{meta_data}</td>
                                <td>{textbook_id + '_' + formerUnitId}</td>
                            </>
                        ) : (
                            <>
                                <td>{++formerUnitId}</td>
                                <td>{(formerPargrapId = 1)}</td>
                                <td>{page_info}</td>
                                <td>{meta_data}</td>
                                <td>{textbook_id + '_' + formerUnitId}</td>
                            </>
                        )}
                    </tr>
                );
            });

        setTa1(value);
        setRes1(
            <>
                <thead>
                    <th>no</th>
                    <th>textbookId</th>
                    <th>unitId</th>
                    <th>paragraph_id</th>
                    <th>page_info</th>
                    <th>meta_data</th>
                </thead>
                <tbody>{arr}</tbody>
            </>
        );
    };

    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }}>
                <textarea
                    style={{ padding: '1rem', minWidth: '30%' }}
                    defaultValue={ta1}
                    cols="60"
                    rows="50"
                    onChange={handleChange}
                ></textarea>
                <table border={1} style={{ padding: '1rem' }}>
                    {res1}
                </table>
            </div>
        </main>
    );
}
