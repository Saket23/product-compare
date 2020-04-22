//@flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData } from "../actions/getData";
import TopPanel from "./TopPanel";
import { createDropdownDataSelector } from "../selectors/createDropdownData";
import BottomPanel from "./BottomPanel";
import {
  getData as getDataSelector,
  isDataLoadedSelector
} from "../selectors/getData";

import { Wrapper } from "./styles/";

import type {Product} from "./type"

type Props = {
  data: any,
  getData: () => any,
  dropdownOptions: Array<string>,
  isDataLoaded: boolean
};

type State = {
  firstProduct: Product,
  secondProduct: Product,
  showOnlyDiff: boolean
};

class Container extends PureComponent<Props, State> {
  onListClickFirst: () => any;
  onListClickSecond:()=> any;
  onCrossClickFirst: ()=> any;
  onCrossClickSecond: ()=> any;
  handleShowOnlyDiff: ()=> any;

  constructor(props) {
    super(props);
    this.state = {
      firstProduct: {},
      secondProduct: {},
      showOnlyDiff : false
    };
    this.onListClickFirst = this.onListClickFirst.bind(this);
    this.onListClickSecond = this.onListClickSecond.bind(this);

    this.onCrossClickFirst = this.onCrossClickFirst.bind(this);
    this.onCrossClickSecond = this.onCrossClickSecond.bind(this);
    this.handleShowOnlyDiff = this.handleShowOnlyDiff.bind(this);
  }
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  onListClickFirst(product: Product) {
    this.setState({ firstProduct: product });
  }

  onListClickSecond(product: Product) {
    this.setState({ secondProduct: product });
  }

  onCrossClickFirst() {
    this.setState({ firstProduct: {} });
  }

  onCrossClickSecond() {
    this.setState({ secondProduct: {} });
  }

  handleShowOnlyDiff(event: any){
      this.setState({showOnlyDiff:event.target.checked})
  }

  render() {
    const { data, dropdownOptions, isDataLoaded } = this.props;
    const { firstProduct, secondProduct, showOnlyDiff } = this.state;
    let count = 0;
    if(Object.keys(firstProduct).length !== 0){
      count++
    }
    if(Object.keys(secondProduct).length !== 0){
      count++
    }
    return (
      <Wrapper>
        {isDataLoaded && (
          <>
            <TopPanel
              selectedCount={count}
              data={data}
              dropdownOptions={dropdownOptions}
              onListClickFirst={this.onListClickFirst}
              onListClickSecond={this.onListClickSecond}
              firstProduct={firstProduct}
              secondProduct={secondProduct}
              onCrossClickFirst={this.onCrossClickFirst}
              onCrossClickSecond={this.onCrossClickSecond}
              handleShowOnlyDiff={this.handleShowOnlyDiff}
              showOnlyDiff={showOnlyDiff}
            />
            <BottomPanel
              data={data}
              firstProduct={firstProduct}
              secondProduct={secondProduct}
              showOnlyDiff={showOnlyDiff}
            />
          </>
        )}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: getDataSelector(state),
    isDataLoaded: isDataLoadedSelector(state),
    dropdownOptions: createDropdownDataSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
