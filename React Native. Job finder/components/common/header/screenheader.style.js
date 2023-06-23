import { StyleSheet } from "react-native";

import { COLORS, SIZES,FONT } from "../../../constants";

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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontWeight:FONT.bold,
    fontSize: 20,
    color: COLORS.primary,
    marginBottom: 10,
  }
});

export default styles;
