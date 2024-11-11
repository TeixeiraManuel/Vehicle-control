import { motion } from "framer-motion";
import { MoreHorizontal, Search } from "lucide-react";
import { Table } from "../components/table/table";
import { TableHeader } from "../components/table/table-header";
import { TableRow } from "../components/table/table-row";
import { TableCell } from "../components/table/table-cell";

export function LocalHistory() {
  return (
    <div className="px-12">
      <motion.h1
        className="text-3xl font-medium text-gray-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Local history
      </motion.h1>
      <motion.div
        className="bg-white p-7"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-6 bg-gray-100 flex-1 py-3 p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.input
            type="search"
            placeholder="Search"
            className="flex flex-1 bg-gray-100 outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Search />
          </motion.div>
        </motion.div>
        <Table>
          <thead className=" rounded-lg bg-blue-500">
            <TableHeader>Model</TableHeader>
            <TableHeader>Registration</TableHeader>
            <TableHeader>Longitude</TableHeader>
            <TableHeader>Latitude</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Hora</TableHeader>
            <TableHeader>Eliminar</TableHeader>
          </thead>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GXR</TableCell>
            <TableCell>LP-KGL-HH</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>344444,55555</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>10:30</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
        </Table>
      </motion.div>
    </div>
  );
}
