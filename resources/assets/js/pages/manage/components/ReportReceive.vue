<template>
    <div class="report-list-wrap">
        <div class="search-container lr">
            <ul>
                <li>
                    <div class="search-label">
                        {{ $L("汇报人") }}
                    </div>
                    <div class="search-content">
                        <Input v-model="username" :placeholder="$L('请输入用户名')"/>
                    </div>
                </li>
                <li>
                    <div class="search-label">
                        {{ $L("汇报类型") }}
                    </div>
                    <div class="search-content">
                        <Select
                            v-model="reportType"
                            :placeholder="$L('全部')">
                            <Option v-for="item in reportTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </li>
                <li>
                    <div class="search-label">
                        {{ $L("汇报时间") }}
                    </div>
                    <div class="search-content">
                        <DatePicker
                            v-model="createAt"
                            type="daterange"
                            split-panels
                            :placeholder="$L('请选择时间')"/>
                    </div>
                </li>
                <li class="search-button">
                    <Tooltip
                        theme="light"
                        placement="right"
                        transfer-class-name="search-button-clear"
                        transfer>
                        <Button :loading="loadIng > 0" type="primary" icon="ios-search" @click="searchTab">{{$L('搜索')}}</Button>
                        <div slot="content">
                            <Button :loading="loadIng > 0" type="text" @click="getLists">{{$L('刷新')}}</Button>
                        </div>
                    </Tooltip>
                </li>
            </ul>
        </div>

        <div class="table-page-box">
            <Table
                :columns="columns"
                :data="lists"
                :loading="loadIng > 0"
                :no-data-text="$L(noDataText)"
                stripe/>
            <Page
                :total="listTotal"
                :current="listPage"
                :page-size="listPageSize"
                :disabled="loadIng > 0"
                :simple="windowMax768"
                :page-size-opts="[10,20,30,50,100]"
                show-elevator
                show-sizer
                show-total
                @on-change="setPage"
                @on-page-size-change="setPageSize"/>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "ReportReceive",
    data() {
        return {
            loadIng: 0,
            columns: [],
            lists: [],
            listPage: 1,
            listTotal: 0,
            listPageSize: 20,
            noDataText: "",

            username: '',
            reportType: '',
            createAt: [],
            reportTypeList: [],
        }
    },
    mounted() {
        this.getLists();
    },
    computed: {
        ...mapState(['userId', 'windowMax768'])
    },
    methods: {
        initLanguage() {
            this.noDataText = this.noDataText || "数据加载中.....";
            this.columns = [{
                title: this.$L("标题"),
                key: 'title',
                sortable: true,
                minWidth: 120,
                render: (h, {row}) => {
                    let arr = []
                    const myUser = row.receives_user.find(({userid}) => userid == this.userId)
                    if (myUser && myUser.pivot.read == 0) {
                        arr.push(
                            h('Tag', {
                                props: {   //传递参数
                                    color: "orange",
                                }
                            }, this.$L("未读")),
                            h('span', row.title)
                        )
                    } else {
                        arr.push(
                            h('span', row.title)
                        )
                    }
                    return h('div', arr)
                }
            }, {
                title: this.$L("类型"),
                key: 'type',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                title: this.$L("接收时间"),
                key: 'receive_time',
                align: 'center',
                sortable: true,
                width: 180,
            }, {
                title: this.$L("操作"),
                align: 'center',
                width: 90,
                minWidth: 90,
                render: (h, {column, row}) => {
                    if (!row.id) {
                        return null;
                    }
                    return h('TableAction', {
                        props: {
                            column,
                            menu: [
                                {
                                    icon: "md-eye",
                                    action: "view",
                                }
                            ]
                        },
                        on: {
                            action: (name) => {
                                if (name === 'view') {
                                    this.$emit("on-view", row)
                                    const myUser = row.receives_user.find(({userid}) => userid == this.userId)
                                    if (myUser) {
                                        this.$set(myUser.pivot, 'read', 1)
                                    }
                                }
                            }
                        }
                    });
                },
            }];
            this.reportTypeList = [
                {value: "", label: this.$L('全部')},
                {value: "weekly", label: this.$L('周报')},
                {value: "daily", label: this.$L('日报')},
            ]
        },

        getLists() {
            this.loadIng = 1;
            this.$store.dispatch("call", {
                url: 'report/receive',
                data: {
                    page: this.listPage,
                    pagesize: this.listPageSize,
                    username: this.username,
                    created_at: this.createAt,
                    type: this.reportType
                },
            }).then(({data, msg}) => {
                // data 结果数据
                this.lists = data.data;
                this.listTotal = data.total;
                if (this.lists.length <= 0) {
                    this.noDataText = this.$L("无数据");
                }
                // msg 结果描述
            }).catch(({msg}) => {
                // msg 错误原因
                $A.messageError(msg);
            }).finally(() => {
                this.loadIng = 0;
            });
        },

        setPage(page) {
            this.listPage = page;
            this.getLists();
        },

        setPageSize(size) {
            if (Math.max($A.runNum(this.listPageSize), 10) !== size) {
                this.listPageSize = size;
                this.getLists();
            }
        },

        searchTab() {
            this.getLists();
        },
    }
}
</script>

<style scoped>

</style>
