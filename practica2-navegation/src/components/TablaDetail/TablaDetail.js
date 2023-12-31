import React from "react";
import { View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { styles } from './TableDetail.styles'

export default function TableDetail(props) {
  const { params } = props;
  const tableHead = ["Estado", "Especie", "Género", "Origen"];
  const tableData = [
    [
      [params.status],
      [params.species],
      [params.gender],
      [params.origin],
    ],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.border}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        <Rows data={tableData} textStyle={styles.rowText} />
      </Table>
    </View>
  );
}
