import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 5,
    marginStart: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: 5,
    marginStart: 5,
    marginBottom: 5,
    marginTop: 5,

  },
  QRCode: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 5

  }
});

export default styles;
