/* eslint-disable no-undef */
import Driver from 'driver.js';

export const tour = [
    {
        element: '#guide_1',
        className: 'guide_1',
        popover: {
            className: '',
            title: 'Circuit Elements panel',
            description: 'This is where you can find all the circuit elements that are offered to build amazing circuits.',
            position: 'right',
            // offset: 160,
        },
    },
    {
        element: '.guide_2',
        popover: {
            title: 'Properties Panel',
            description: 'This panel lets you change element properties as they are selected. When no elements are selected, the panel displays project properties.',
            position: 'left',
            // offset: 200,
        },
    },
    {
        element: '.quick-btn',
        popover: {
            title: 'Quick Access Panel',
            description: 'This movable panel offers to perform some actions like Save Online, Open, Download quickly. Hover over the icons and see for yourself',
            position: 'bottom',
            align: 'center',
        },
    },
    // {
    //     element: '.forum-tab',
    //     popover: {
    //         className: "",
    //         title: 'Forum Tab',
    //         description: "The forums can help you report issues & bugs, feature requests, and discussing about circuits with the community!",
    //         position: 'right',
    //         // offset: -25,
    //     },
    // },
    {
        element: '.combined-navbar',
        popover: {
            title: 'Circuit Tabs',
            description: 'This section displays all the circuits you have in your project. You can easily add and delete circuits.',
            position: 'bottom',
            align: 'start',
            offsetY: -10,
        },
    },
    {
        element: '.timing-diagram-panel',
        popover: {
            title: 'Timing Diagram Panel (Waveform)',
            description: 'This panel displays the waveform created by circuits and can be used for resolving race conditions and debugging circuits.',
            position: 'bottom',
            offset: 0,
        },
    },
    {
        element: '.testbench-manual-panel',
        popover: {
            title: 'Test Bench Panel',
            description: 'This panel helps you test your circuit correctness by observing how your circuit responds under different test cases, ensuring a thorough and effective validation process.',
            position: 'right',
            align: 'end',
            offset: 0,
        },
    },

    // {
    //     element: '#delCirGuide',
    //     popover: {
    //         title: 'Delete sub-circuit button',
    //         description: "You can make delete sub-circuits by pressing the cross *Note that main circuit cannot be deleted.",
    //         position: 'right',
    //         // offset: 250,
    //     },
    // },
    {
        element: '.btn-primary .fa-bug',
        popover: {
            className: 'bug-guide',
            title: 'Report System',
            description: 'You can report any issues/bugs you face through this issue reporting button there and then quickly.',
            position: 'left',
            offset: -105,
            align: 'end',
        },
    },
    {
        element: '.combined-navbar',
        popover: {
            className: 'tourHelpStep',
            title: 'Restart tutorial anytime',
            description: 'You can restart this tutorial anytime by clicking on "Tutorial Guide" under this dropdown.',
            position: 'bottom',
            offset: 365,
            align: 'end',
            offsetY: -10,
        },
    },

];

export const touchTour = [
    {
        element: '#touchMenu',
        className: 'touchMenuIcon',
        popover: {
            className: '',
            title: 'Menu Buttons',
            description: 'This are the button help you to access the following tools 1.CircuitElement 2.PropertiesPanel 3.TimeDiagram 4.QuickMenu',
            position: 'left',
            offset: 50,
        },
    },
    {
        element: '#liveMenu',
        className: 'liveMenuIcon',
        popover: {
            className: '',
            title: 'Quick Tools',
            description: 'This are Quick Tools 1.Fit to screen 2.Delete 3.Undo',
            position: 'down',
            offset: 1,
        },
    },
    {
        element: '#combined-navbar>#tabsBar',
        popover: {
            title: 'Circuit Tabs',
            description: 'This section displays all the circuits you have in your project. You can easily add and delete circuits.',
            position: 'bottom',
            offset: 250,
        },
    },
    {
        element: '#smallNavbarMenu-btn',
        className: '',
        popover: {
            className: '',
            title: 'Navmenu Button',
            description: 'This button is use to access Navmenu',
            position: 'left',
            offset: 0,
        },
    },
];

// Not used currently
export const tutorialWrapper = () => {
    const panelHighlight = new Driver();
    $('.panelHeader').one('click', (e) => {
        if (localStorage.tutorials === 'next') {
            panelHighlight.highlight({
                element: '#guide_1',
                showButtons: false,
                popover: {
                    title: 'Here are the elements',
                    description: 'Select any element by clicking on it & then click anywhere on the grid to place the element.',
                    position: 'right',
                    offset: $($(e.target).next()).height() + $(e.target).offset().top - 45,
                },
            });
            localStorage.setItem('tutorials', 'done');
        }
    });
    $('.icon').on('click', () => {
        panelHighlight.reset(true);
    });
};

const animatedTourDriver = new Driver({
    animate: true,
    opacity: 0.8,
    padding: 5,
    showButtons: true,
});

export function showTourGuide() {
    // const target=document.querySelector('#combined-navbar>#tabsBar');
    // console.log(target);
    $('.draggable-panel .maximize').trigger('click');
    if (window.screen.width > 1000) {
        animatedTourDriver.defineSteps(tour);
    } else {
        animatedTourDriver.defineSteps(touchTour);
    }
    animatedTourDriver.start();
    localStorage.setItem('tutorials_tour_done', true);
    animatedTourDriver.refresh();
}

export default showTourGuide;
