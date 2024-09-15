import { toast } from "react-toastify"
import api from "../../../../services/api"
import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const BasicTable = () => {
    const [rows, setRows] = useState<Array<ReturnType<typeof createRow>>>([])

    interface FoodsData {
        id: string,
        name: string,
        effect: string,
        turn: number,
        img: string
    }

    function createRow(name: string, effect: string, turn: number, img: string) {
        return { name, effect, turn, img }
    }

    const getData = async () => {
        try {
            const response = await api.get("f")
            const data: FoodsData[] = response.data

            const newRows = data.map(element =>
                createRow(element.name, element.effect, element.turn, element.img)
            )

            setRows(newRows)
        } catch (err) {
            toast.error("Deu ruim patrão: " + err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <TableContainer style={{ maxHeight: '100%', overflowY: 'auto'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Foods</TableCell>
                        <TableCell align="right">Effect</TableCell>
                        <TableCell align="right">Turn</TableCell>
                        <TableCell align="right">Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.effect}</TableCell>
                            <TableCell align="right">{row.turn}</TableCell>
                            <TableCell align="right">
                                <img src={row.img} alt={row.name} style={{ maxWidth: '50px', height: 'auto' }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
