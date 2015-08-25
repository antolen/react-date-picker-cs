/**
 * Created by sam on 7/23/15.
 * 此页面的 month 为 1 基
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashStringPadLeft = require('lodash/string/padLeft');

var _lodashStringPadLeft2 = _interopRequireDefault(_lodashStringPadLeft);

var _selectYear = require('./selectYear');

var _selectYear2 = _interopRequireDefault(_selectYear);

var _selectMonth = require('./selectMonth');

var _selectMonth2 = _interopRequireDefault(_selectMonth);

var _weekDays = require('./weekDays');

var _weekDays2 = _interopRequireDefault(_weekDays);

exports['default'] = _react2['default'].createClass({
    displayName: 'calendar',

    propTypes: {
        date: _react2['default'].PropTypes.string,
        locale: _react2['default'].PropTypes.string,
        onClickCalendar: _react2['default'].PropTypes.func.isRequired,
        range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
        selectToday: _react2['default'].PropTypes.func.isRequired
    },
    getInitialState: function getInitialState() {
        var date = new Date(this.props.date || this.props.returnToday());
        var month = date.getMonth() + 1;

        return {
            year: date.getFullYear(), // {number}
            month: month, // {number}
            day: date.getDate() // {number}
        };
    },
    prevMonth: function prevMonth() {
        if (this.state.month === 1) {
            this.setState({
                month: 12,
                year: this.state.year - 1
            });
            return;
        }
        this.setState({
            month: this.state.month - 1
        });
    },
    nextMonth: function nextMonth() {
        if (this.state.month === 12) {
            this.setState({
                month: 1,
                year: this.state.year + 1
            });
            return;
        }
        this.setState({
            month: this.state.month + 1
        });
    },
    mutateDate: function mutateDate() {

        // 选择天的时候
        var date = this.state.year + '-' + (0, _lodashStringPadLeft2['default'])(this.state.month, 2, '0') + '-' + (0, _lodashStringPadLeft2['default'])(this.state.day, 2, '0');
        this.props.onClickCalendar(date);
    },
    selectYear: function selectYear(year) {
        this.setState({
            year: +year
        });
    },
    selectDay: function selectDay(day) {
        this.setState({
            day: +day
        }, function () {
            this.mutateDate();
        });
    },
    selectMonth: function selectMonth(month) {
        this.setState({
            month: +month
        });
    },
    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: "datePicker__calendar" },
            _react2['default'].createElement(
                'div',
                { className: "datePicker__calendar__header" },
                _react2['default'].createElement('span', { onClick: this.prevMonth, className: "datePicker__prev" }),
                _react2['default'].createElement(_selectYear2['default'], { year: this.state.year, selectYear: this.selectYear, range: this.props.range }),
                _react2['default'].createElement(_selectMonth2['default'], { month: this.state.month, selectMonth: this.selectMonth, locale: this.props.locale }),
                _react2['default'].createElement('span', { onClick: this.nextMonth, className: "datePicker__next" })
            ),
            _react2['default'].createElement(_weekDays2['default'], { locale: this.props.locale, highlight: new Date(this.props.date).getFullYear() === this.state.year && new Date(this.props.date).getMonth() + 1 === this.state.month, year: this.state.year, month: this.state.month, day: this.state.day, selectDay: this.selectDay }),
            _react2['default'].createElement(
                'div',
                { className: "datePicker__btnGroup" },
                _react2['default'].createElement(
                    'button',
                    { className: "datePicker__btn datePicker__btn--today", onClick: this.props.selectToday },
                    this.props.locale === 'zh' ? '今天' : 'Today'
                )
            )
        );
    }

});
var __hotReload = true;
exports.__hotReload = __hotReload;