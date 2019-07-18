'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">meed documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-804dad1ee9201962084eff9aafc52278"' : 'data-target="#xs-components-links-module-AppModule-804dad1ee9201962084eff9aafc52278"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-804dad1ee9201962084eff9aafc52278"' :
                                            'id="xs-components-links-module-AppModule-804dad1ee9201962084eff9aafc52278"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreateAccountPageModule.html" data-type="entity-link">CreateAccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateAccountPageModule-33dabe9e02da90e03d87ac45e802e61c"' : 'data-target="#xs-components-links-module-CreateAccountPageModule-33dabe9e02da90e03d87ac45e802e61c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateAccountPageModule-33dabe9e02da90e03d87ac45e802e61c"' :
                                            'id="xs-components-links-module-CreateAccountPageModule-33dabe9e02da90e03d87ac45e802e61c"' }>
                                            <li class="link">
                                                <a href="components/CreateAccountPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateAccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateLoginPageModule.html" data-type="entity-link">CreateLoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateLoginPageModule-5b54619a208bdf8eadc82566d48c10df"' : 'data-target="#xs-components-links-module-CreateLoginPageModule-5b54619a208bdf8eadc82566d48c10df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateLoginPageModule-5b54619a208bdf8eadc82566d48c10df"' :
                                            'id="xs-components-links-module-CreateLoginPageModule-5b54619a208bdf8eadc82566d48c10df"' }>
                                            <li class="link">
                                                <a href="components/CreateLoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateLoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerPanelModule.html" data-type="entity-link">CustomerPanelModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerPanelRoutingModule.html" data-type="entity-link">CustomerPanelRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageModule.html" data-type="entity-link">DashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' : 'data-target="#xs-components-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' :
                                            'id="xs-components-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                            <li class="link">
                                                <a href="components/AccountSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' : 'data-target="#xs-directives-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' :
                                        'id="xs-directives-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                        <li class="link">
                                            <a href="directives/DashboardDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' : 'data-target="#xs-injectables-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' :
                                        'id="xs-injectables-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                        <li class="link">
                                            <a href="injectables/DashboardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DashboardService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' : 'data-target="#xs-pipes-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' :
                                            'id="xs-pipes-links-module-DashboardPageModule-eb1e00af0dfd0e91eff2f8aa58296b14"' }>
                                            <li class="link">
                                                <a href="pipes/DashboardPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardSummaryPageModule.html" data-type="entity-link">DashboardSummaryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardSummaryPageModule-70bc113b6cdf3658626834ff4cbcc6f1"' : 'data-target="#xs-components-links-module-DashboardSummaryPageModule-70bc113b6cdf3658626834ff4cbcc6f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardSummaryPageModule-70bc113b6cdf3658626834ff4cbcc6f1"' :
                                            'id="xs-components-links-module-DashboardSummaryPageModule-70bc113b6cdf3658626834ff4cbcc6f1"' }>
                                            <li class="link">
                                                <a href="components/DashboardSummaryPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardSummaryPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsScreenPageModule.html" data-type="entity-link">DetailsScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailsScreenPageModule-d3e253b030bd7ebed17be081d1480166"' : 'data-target="#xs-components-links-module-DetailsScreenPageModule-d3e253b030bd7ebed17be081d1480166"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailsScreenPageModule-d3e253b030bd7ebed17be081d1480166"' :
                                            'id="xs-components-links-module-DetailsScreenPageModule-d3e253b030bd7ebed17be081d1480166"' }>
                                            <li class="link">
                                                <a href="components/DetailsScreenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailsScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InternalTransferPageModule.html" data-type="entity-link">InternalTransferPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InternalTransferPageModule-ed8d227b92c9f166d012a2eb13a96355"' : 'data-target="#xs-components-links-module-InternalTransferPageModule-ed8d227b92c9f166d012a2eb13a96355"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InternalTransferPageModule-ed8d227b92c9f166d012a2eb13a96355"' :
                                            'id="xs-components-links-module-InternalTransferPageModule-ed8d227b92c9f166d012a2eb13a96355"' }>
                                            <li class="link">
                                                <a href="components/InternalTransferPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InternalTransferPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InviteUserPageModule.html" data-type="entity-link">InviteUserPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InviteUserPageModule-6f8bb917f3c99ad49c507356f0515ddf"' : 'data-target="#xs-components-links-module-InviteUserPageModule-6f8bb917f3c99ad49c507356f0515ddf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InviteUserPageModule-6f8bb917f3c99ad49c507356f0515ddf"' :
                                            'id="xs-components-links-module-InviteUserPageModule-6f8bb917f3c99ad49c507356f0515ddf"' }>
                                            <li class="link">
                                                <a href="components/InviteUserPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InviteUserPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginScreenPageModule.html" data-type="entity-link">LoginScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginScreenPageModule-48359a1fc7a65ddc01548abb04bfeb00"' : 'data-target="#xs-components-links-module-LoginScreenPageModule-48359a1fc7a65ddc01548abb04bfeb00"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginScreenPageModule-48359a1fc7a65ddc01548abb04bfeb00"' :
                                            'id="xs-components-links-module-LoginScreenPageModule-48359a1fc7a65ddc01548abb04bfeb00"' }>
                                            <li class="link">
                                                <a href="components/LoginScreenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MeedsharePageModule.html" data-type="entity-link">MeedsharePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MeedsharePageModule-f9d74a38c6ee62990b586f425e2ae1e1"' : 'data-target="#xs-components-links-module-MeedsharePageModule-f9d74a38c6ee62990b586f425e2ae1e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MeedsharePageModule-f9d74a38c6ee62990b586f425e2ae1e1"' :
                                            'id="xs-components-links-module-MeedsharePageModule-f9d74a38c6ee62990b586f425e2ae1e1"' }>
                                            <li class="link">
                                                <a href="components/MeedsharePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeedsharePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/P2pTransferPageModule.html" data-type="entity-link">P2pTransferPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-P2pTransferPageModule-dc4a5b279f4c59e0fa9272554bb56b34"' : 'data-target="#xs-components-links-module-P2pTransferPageModule-dc4a5b279f4c59e0fa9272554bb56b34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-P2pTransferPageModule-dc4a5b279f4c59e0fa9272554bb56b34"' :
                                            'id="xs-components-links-module-P2pTransferPageModule-dc4a5b279f4c59e0fa9272554bb56b34"' }>
                                            <li class="link">
                                                <a href="components/P2pTransferPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">P2pTransferPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupFlowModule.html" data-type="entity-link">SignupFlowModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignupFlowRoutingModule.html" data-type="entity-link">SignupFlowRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SingupEmailPageModule.html" data-type="entity-link">SingupEmailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SingupEmailPageModule-00518548eade42dc1fbccbf2c72f3fc6"' : 'data-target="#xs-components-links-module-SingupEmailPageModule-00518548eade42dc1fbccbf2c72f3fc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SingupEmailPageModule-00518548eade42dc1fbccbf2c72f3fc6"' :
                                            'id="xs-components-links-module-SingupEmailPageModule-00518548eade42dc1fbccbf2c72f3fc6"' }>
                                            <li class="link">
                                                <a href="components/SingupEmailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SingupEmailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionListPageModule.html" data-type="entity-link">TransactionListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TransactionListPageModule-c5e7353ea7473dde7f33c5e8447b03be"' : 'data-target="#xs-components-links-module-TransactionListPageModule-c5e7353ea7473dde7f33c5e8447b03be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TransactionListPageModule-c5e7353ea7473dde7f33c5e8447b03be"' :
                                            'id="xs-components-links-module-TransactionListPageModule-c5e7353ea7473dde7f33c5e8447b03be"' }>
                                            <li class="link">
                                                <a href="components/TransactionListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransactionListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrchestrationService.html" data-type="entity-link">OrchestrationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedService.html" data-type="entity-link">SharedService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});