import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Styles from '../../assets/styles/main'

class APIView extends Component {
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <View style={ViewStyles.mainContent}>
          <View style={ViewStyles.viewBox}>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.button()
              }}
            >
              Button(按钮)
            </Text>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.alert()
              }}
            >
              Alert(提示对话框)
            </Text>
          </View>
          <View style={ViewStyles.viewBox}>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.loading()
              }}
            >
              Loading(加载器)
            </Text>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.flatList()
              }}
            >
              FlatList(简单列表组件)
            </Text>
          </View>
          <View style={ViewStyles.viewBox}>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.picker()
              }}
            >
              Picker(选择器)
            </Text>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.cameraRoll()
              }}
            >
              cameraRoll(相机)
            </Text>
          </View>
          <View style={ViewStyles.viewBox}>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.modal()
              }}
            >
              Modal(弹出框)
            </Text>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.datePicker()
              }}
            >
              DatePicker(时间选择器)
            </Text>
          </View>
          <View style={ViewStyles.viewBox}>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.table()
              }}
            >
              Table(表格控件)
            </Text>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.tableFix()
              }}
            >
              Table-Fix(表格控件)
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default APIView

const ViewStyles = {
  mainContent: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20
  },
  viewBox: {
    flexDirection: 'row',
    marginBottom: 20
  },
  viewItem: {
    flex: 1
  }
}
